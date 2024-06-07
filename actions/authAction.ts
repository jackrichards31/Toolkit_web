"use server";

import { z } from "zod";
import { SignInSchema, SignUpSchema } from "@/schemas";
import { signIn } from "@/auth";
import { db } from "@/lib/database";
import bcrypt from "bcryptjs";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/emailSender";

export const login = async (values: z.infer<typeof SignInSchema>) => {
  //   Use .safeParse on the schema instance
  const validatedFields = SignInSchema.safeParse(values);

  // Handle the result of the schema instance
  if (!validatedFields.success) {
    // Validated data is in validatedFields.data
    return { error: `Invalid fields!` };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      error: "Email does not exist!",
    };
  }

  if (!existingUser.emailVerified) {
    // eslint-disable-next-line no-unused-vars
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw err;
  }
  return { success: `Login succeeded, welcome back!` };
};

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  try {
    //   Use .safeParse on the schema instance
    const validatedFields = SignUpSchema.safeParse(values);

    if (!validatedFields.success) return { error: "Invalid fields!" };

    const {
      email,
      password,
      firstname,
      lastname,
      phone,
      groupTitle,
      roleTitle,
    } = validatedFields.data;

    // Hashed the password of the registered users
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "This email has been already taken!" };
    }

    const newUser = await db.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        phone,
      },
    });

    await db.group.create({
      data: {
        title: groupTitle,
        userId: newUser.id,
      },
    });

    await db.role.create({
      data: {
        title: roleTitle,
        userId: newUser.id,
      },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Yay!! Your user has been created!" };
  } catch (err) {
    console.log(err);
  }
};

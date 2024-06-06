"use server";

import { z } from "zod";
import { SignInSchema, SignUpSchema } from "@/schemas";
import { signIn } from "@/auth";
import { db } from "@/lib/database";
import bcrypt from "bcryptjs";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";

export const login = async (values: z.infer<typeof SignInSchema>) => {
  //   Use .safeParse on the schema instance
  const validatedFields = SignInSchema.safeParse(values);

  // Handle the result of the schema instance
  if (!validatedFields.success) {
    // Validated data is in validatedFields.data
    return { error: `Invalid fields!` };
  }

  const { email, password } = validatedFields.data;

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

    const { email, password, firstname, lastname, phone, groupId } =
      validatedFields.data;

    const groupIdMapping: Record<string, number | null> = {
      IT: 1,
      Hardware: 2,
      Sale: 3,
      Support: 4,
      Marketing: 5,
    };

    const groupIDCatching = groupIdMapping[groupId] ?? null;

    if (groupIDCatching === null) return { error: "Invalid group ID" };

    // Hashed the password of the registered users
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "This email has been already taken!" };
    }

    await db.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        phone,
        groupId: groupIDCatching,

        // Error of this one, it passed an empty string to the database.
        roleId: 2, // value of 1 is an admin, and the value of 2 is a user. By default, the newly created user is assigned to the user role.
      },
    });

    const verificationToken = await generateVerificationToken(email);

    return { success: "Yay!! Your user has been created!" };
  } catch (err) {
    console.log(err);
  }
};

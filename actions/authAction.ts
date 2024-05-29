"use server";
import { z } from "zod";
import { SignInSchema, SignUpSchema } from "@/schemas";
import { signIn } from "@/auth";
import { db } from "@/lib/database";
import bcrypt from "bcrypt";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";

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

  // Errors are in validatedFields.error
  return { success: `Login succeeded, welcome back!` };
};

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  try {
    //   Use .safeParse on the schema instance
    const validatedFields = SignUpSchema.safeParse(values);

    if (!validatedFields.success) return { error: "Invalid fields!" };

    const { email, password, firstname, lastname, phone, groupId } =
      validatedFields.data;

    const groupIDCatching =
      groupId === "IT"
        ? 1
        : groupId === "Hardware"
          ? 2
          : groupId === "Sale"
            ? 3
            : groupId === "Support"
              ? 4
              : groupId === "Marketing"
                ? 5
                : null;

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
        roleId: 2, // value of 1 is an admin, and the value of 2 is a user. By default, the newly created user is assigned to the user role.
      },
    });

    return { success: "Yay!! Your user has been created!" };
  } catch (err) {
    console.log(err);
  }
};

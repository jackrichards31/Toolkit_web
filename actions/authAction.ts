"use server";
import { z } from "zod";
import { SignInSchema, SignUpSchema } from "@/schemas";
import { db } from "@/lib/database";
import bcrypt from "bcrypt";

export const login = (values: z.infer<typeof SignInSchema>) => {
  //   Use .safeParse on the schema instance
  const validatedFields = SignInSchema.safeParse(values);

  // Handle the result of the schema instance
  if (!validatedFields.success) {
    // Validated data is in validatedFields.data
    return { error: `Invalid fields!` };
  } else {
    // Errors are in validatedFields.error
    return { success: `Login succeeded, welcome back!` };
  }
};

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  //   Use .safeParse on the schema instance
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { email, password, firstname, lastname, phone } = validatedFields.data;

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
    },
  });

  // else return { success: "Your form has been sent!" };
};

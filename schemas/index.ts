import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password shouldn't be blank!",
  }),
});

export const SignUpSchema = z.object({
  email: z
    .string()
    .email("Invalid Email!")
    .regex(
      /^[a-zA-Z0-9._%+-]+@micamp\.com$/,
      "Only @micamp.com emails are allowed!"
    ),
  password: z
    .string()
    .min(8, {
      message: "Invalid password!",
    })
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message:
        "Password must have 1 capital, 1 lowercase, 1 number, and 1 special character!",
    }),
  firstname: z.string().min(1).max(15),
  lastname: z.string().min(1).max(20),
  phone: z.string().max(10),
  groupId: z.string(),
  role: z.string(),
});

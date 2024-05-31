import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password shouldn't be blank!",
  }),
});

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Invalid password!",
  }),
  firstname: z.string().min(1).max(15),
  lastname: z.string().min(1).max(20),
  phone: z.string().max(10),
  groupId: z.string(),
  role: z.string(),
});

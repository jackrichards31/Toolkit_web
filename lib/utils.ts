import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) => {
  z.object({
    // For sign-in
    Email: z.string().email(),
    Password: z.string().min(8),

    // For sign up
    FirstName:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(15),
    LastName:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(20),
    Phone:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(10),
    Group: type === "sign-in" ? z.string().optional() : z.string().max(20),
  });
};

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2).max(15),
  lastName: z.string().min(3).max(20),
  phone: z.string().min(3).max(10),
  group: z.string().max(20),
});

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const saltAndHashPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

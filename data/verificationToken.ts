import { db } from "@/lib/database";

/**
 * This function is the function that get to email to verify token.
 */
export const getVerificationByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch (err) {
    console.log(err);
  }
};

/**
 * This function is the function that get to token to verify token.
 */
export const getVerificationByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch (err) {
    console.log(err);
  }
};

import { signIn } from "next-auth/react";

export const slackLogin = async () => {
  await signIn("slack");
};

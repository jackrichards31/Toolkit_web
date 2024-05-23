import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials: string) => {
        const user = null;

        const pwHash = saltAndHashPassword(credentials.password);
      },
    }),
  ],
});

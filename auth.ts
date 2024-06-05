import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role, Group } from "@prisma/client";
import { db } from "./lib/database";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    /*
     * Check if this signIn({user}) is emailVerified or not, if not they will not be able to login
     */
    // async signIn({ user }) {
    //   const existingUser = await getUserById(user.id);

    //   if (!existingUser || !existingUser.emailVerified) {
    //     return false;
    //   }

    //   return true;
    // },
    async session({ token, session }) {
      console.log({ SessionToken: token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role as Role; // Create the role for users
        session.user.group = token.group as Group; // Create the group for users
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      // Include role in the token
      token.role = existingUser.roleId; // Adjust according to the Role model

      // Include group in the token
      token.group = existingUser.groupId; // Adjust according to the Group model

      token.firstname = existingUser.firstname; // Adjust according to the User's firstname

      token.lastname = existingUser.lastname;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

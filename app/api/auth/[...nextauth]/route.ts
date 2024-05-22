// import { handlers } from "@/auth";
// export const { GET, POST } = handlers;

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { verify } from "argon2";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       async authorize(credentials) {
//         const { email, password } = credentials;

//         try {
//           // Fetch data from database table
//           const user = await prisma.user.findUnique({
//             where: { email },
//           });

//           if (!user) return null;

//           const validPassword = await verify(user.password, password);

//           if (!validPassword) return null;

//           return user;
//         } catch (err) {
//           console.log(err);
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.user = user;
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = token.user;
//       return session;
//     },
//   },
// });

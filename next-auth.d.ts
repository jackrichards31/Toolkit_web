// This page is for declaring the callbacks session to make them regonise the information of Role
// and Group from the database table

import { DefaultSession, DefaultUser } from "next-auth";
import { Role, Group, User } from "@prisma/client";

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      id: string;
      role: Role;
      group: Group;
    } & DefaultSession;
  }

  // eslint-disable-next-line no-unused-vars
  interface User extends DefaultUser {
    id: string;
    role: Role;
    group: Group;
    firstname: User;
    lastname: User;
  }
}

declare module "next-auth/jwt" {
  // eslint-disable-next-line no-unused-vars
  interface JWT {
    id: string;
    role: Role;
    group: Group;
    firstname: User;
    lastname: User;
  }
}

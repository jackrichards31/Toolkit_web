// This select options page is for SignUp page's department selection.

import React from "react";
import { GetServerSideProps } from "next";
import { db } from "@/lib/database";
import SignUpForm from "./SignUpForm";

type Group = {
  id: number;
  title: string;
};

type GroupProps = {
  groups: Group[];
  type: string;
};

export const getServerSideProps: GetServerSideProps<GroupProps> = async () => {
  const groups: Group[] = await db.group.findMany();
  return {
    props: {
      groups,
    },
  };
};

const SelectOptions: React.FC<GroupProps> = ({ groups, type }) => {
  return (
    <div>
      <SignUpForm type={type} groups={groups} />
    </div>
  );
};

export default SelectOptions;

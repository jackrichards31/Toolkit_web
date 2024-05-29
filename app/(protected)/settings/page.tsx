import React from "react";
import { auth } from "@/auth";

const Protected = async () => {
  const session = await auth();
  return <div>{JSON.stringify(session)}</div>;
};

export default Protected;

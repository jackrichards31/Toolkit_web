import Auth from "@/components/AuthForm/Auth";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <Auth type="sign-in" />
    </section>
  );
};

export default SignIn;

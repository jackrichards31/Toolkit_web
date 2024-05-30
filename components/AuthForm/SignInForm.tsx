import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas";
import Link from "next/link";
import { Button } from "../ui/button";
import CustomInput from "./CustomInput";
import FormAlert from "./FormAlert";
import { login } from "@/actions/authAction";

const SignInForm = ({ type }: { type: string }) => {
  const [isPending, startPending] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    setError("");
    setSuccess("");
    startPending(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <CustomInput
            key="email"
            control={form.control}
            name="email"
            label="Email"
            nameHolder="example@micamp.com"
            type="sign-in"
          />
          <CustomInput
            key="password"
            control={form.control}
            name="password"
            label="Password"
            nameHolder="*********"
            type="sign-in"
          />
          <div className="mt-7 flex flex-col">
            {error && <FormAlert message={error} type="error" />}
            {success && <FormAlert message={success} type="success" />}
            <Button type="submit" disabled={isPending}>
              {type === "sign-in" ? "Sign in" : "Sign up"}
            </Button>
            <p className="my-5 cursor-pointer text-center">Forget password</p>
            <hr />
            <p className="mt-5 text-center">
              {type === "sign-in"
                ? "Do not have an account yet?"
                : "Already have an account?"}
            </p>
            <p className="cursor-pointer text-center text-sky-600">
              {type === "sign-in" ? (
                <Link href="/sign-up">Sign Up</Link>
              ) : (
                <Link href="/sign-in">Sign In</Link>
              )}
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;

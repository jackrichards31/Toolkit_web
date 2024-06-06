"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas";
import Link from "next/link";
import { Button } from "../../ui/button";
import CustomInput from "./CustomInput";
import FormAlert from "./FormAlert";
import { login } from "@/actions/authAction";
import LineSeperator from "../../LineSeperator";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

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
      {/* Slack login */}
      <Button
        className="flex w-full items-center justify-between"
        onClick={() => signIn("slack", { callbackUrl: DEFAULT_LOGIN_REDIRECT })}
      >
        <Image
          src="/icon/slack.svg"
          alt="slack"
          width={30}
          height={30}
          priority
        />
        <span>Continue with Slack</span>
      </Button>

      <div data-orientation="horizon" className="my-5 w-full border" />

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
            <LineSeperator text="Or" />
          </div>
        </form>
      </Form>

      <div className="mt-3 flex justify-center">
        <span>Create an account</span>
      </div>
      <p className="mt-5 cursor-pointer text-center">
        <Link href="/sign-up">
          <Button className="w-full">Sign-Up</Button>
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;

"use client";

import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../ui/form";
import { Button } from "../../ui/button";
import CustomInput from "./CustomInput";
import FormAlert from "./FormAlert";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schemas";
import { signUp } from "@/actions/authAction";
import LineSeperator from "../../LineSeperator";

const SignUpForm = ({ type }: { type: string }) => {
  // Use the build-in transitioning function from React to prevent the user to submit the form multiple times.
  const [isPending, startPending] = useTransition();

  // For storing the validation of an error and a success messages.
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  // const [selectedGroup, setSelectedGroup] = useState<string>("");
  const SignUpForm = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      groupTitle: "",
      firstname: "",
      lastname: "",
      roleTitle: "User",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    console.log(values);
    setError("");
    setSuccess("");
    startPending(async () => {
      await signUp(values).then(async (data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <Form {...SignUpForm}>
      <form
        onSubmit={SignUpForm.handleSubmit(onSubmit)}
        className="w-full space-y-8"
      >
        <div className="flex justify-between">
          <div className="w-32">
            <CustomInput
              key="firstname"
              control={SignUpForm.control}
              name="firstname"
              label="Name"
              nameHolder="John"
              type="sign-up"
            />
          </div>
          <div className="w-32">
            <CustomInput
              key="lastname"
              control={SignUpForm.control}
              name="lastname"
              label="Surname"
              nameHolder="Doe"
              type="sign-up"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-32">
            <CustomInput
              key="phone"
              control={SignUpForm.control}
              name="phone"
              label="Phone number"
              nameHolder="1234567890"
              type="sign-up"
            />
          </div>
          <div className="w-32">
            <CustomInput
              key="group"
              control={SignUpForm.control}
              name="groupTitle"
              label="Group"
              nameHolder="IT, Sales, etc..."
              type="sign-up"
            />
          </div>
        </div>
        <CustomInput
          key="email"
          control={SignUpForm.control}
          name="email"
          label="Email"
          nameHolder="example@micamp.com"
          type="sign-up"
        />
        <CustomInput
          key="password"
          control={SignUpForm.control}
          name="password"
          label="Password"
          nameHolder="*********"
          type="sign-up"
        />
        <div className="mt-7 flex flex-col">
          <div
            data-orientation="horizon"
            role="none"
            className="mb-5 w-full border"
          />
          {error && <FormAlert message={error} type="error" />}
          {success && <FormAlert message={success} type="success" />}
          <Button type="submit" disabled={isPending}>
            Sign up
          </Button>
          <LineSeperator text="Or" className="mt-4" />
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
  );
};

export default SignUpForm;

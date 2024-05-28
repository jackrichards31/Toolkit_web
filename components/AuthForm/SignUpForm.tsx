import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import CustomInput from "./CustomInput";
import FormAlert from "./FormAlert";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schemas";
import { signUp } from "@/actions/authAction";
import { GetServerSideProps } from "next";
import { db } from "@/lib/database";

const SignUpForm = ({ type }: { type: string }) => {
  const [isPending, startPending] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  // const [selectedGroup, setSelectedGroup] = useState<string>("");
  const SignUpForm = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      group: "",
      firstname: "",
      lastname: "",
    },
  });

  const handleGroupSelectionChange = (value: string) => {
    SignUpForm.setValue("group", value);
  };

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    // Add selectedGroup to form data.
    setError("");
    setSuccess("");
    startPending(() => {
      signUp(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  const getServerSideProps: GetServerSideProps = async () => {
    const groups = await db.group.findMany();
    return {
      props: {
        groups,
      },
    };
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
              name="group"
              label="Group"
              nameHolder="IT, Sales, etc..."
              type="sign-up"
              onGroupChange={handleGroupSelectionChange} // Pass callback function
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
          {error && <FormAlert message={error} type="error" />}
          {success && <FormAlert message={success} type="success" />}
          <Button type="submit" disabled={isPending}>
            {type === "sign-in" ? "Sign in" : "Sign up"}
          </Button>
          {type === "sign-in" && (
            <p className="my-5 cursor-pointer text-center">Forget password</p>
          )}
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
  );
};

export default SignUpForm;

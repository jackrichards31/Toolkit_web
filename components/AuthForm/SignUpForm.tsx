import { Link } from "lucide-react";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import CustomInput from "./CustomInput";
import FormAlert from "./FormAlert";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schemas";

const SignUpForm = ({ type }: { type: string }) => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
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

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <div className="flex justify-between">
          <div className="w-32">
            <CustomInput
              control={form.control}
              name="firstname"
              label="Your name"
              nameHolder="example@micamp.com"
            />
          </div>
          <div className="w-32">
            <CustomInput
              control={form.control}
              name="lastname"
              label="Your surname"
              nameHolder="example@micamp.com"
            />
          </div>
        </div>
        <CustomInput
          control={form.control}
          name="phone"
          label="Your phone number"
          nameHolder="example@micamp.com"
        />
        <CustomInput
          control={form.control}
          name="email"
          label="Email"
          nameHolder="example@micamp.com"
        />
        <CustomInput
          control={form.control}
          name="password"
          label="Password"
          nameHolder="*********"
        />
        <div className="mt-7 flex flex-col">
          {type === "sign-in" ? (
            <FormAlert message="Something went wrong!" type="error" />
          ) : (
            <FormAlert message="Success" type="success" />
          )}
          <Button type="submit">
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

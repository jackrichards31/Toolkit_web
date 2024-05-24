import React from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas";
import { Link } from "lucide-react";
import { Button } from "../ui/button";
import CustomInput from "./CustomInput";
import FormAlert from "./FormAlert";

const SignInForm = ({ type }: { type: string }) => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    console.log(values);
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
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
    </div>
  );
};

export default SignInForm;

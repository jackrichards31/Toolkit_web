"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { formSchema } from "@/lib/utils";

const Auth = ({ type }: { type: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      group: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const [user, setUser] = useState(null);

  return (
    <section className="auth-form">
      <div className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1 px-4">
          <Image
            src="/icon/LogoBlack.webp"
            alt="logo"
            width={300}
            height={300}
            priority
          />
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-[24px] font-semibold text-gray-900 lg:text-[36px]">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-[16px] font-normal text-gray-600">
              {user
                ? "Link your account to get started."
                : "Please, enter your details."}
            </p>
          </h1>
          <div className="flex flex-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {type === "sign-in" && (
                  <>
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="Your name"
                      nameHolder="example@micamp.com"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Your last name"
                      nameHolder="example@micamp.com"
                    />
                    <CustomInput
                      control={form.control}
                      name="phone"
                      label="Your phone number"
                      nameHolder="example@micamp.com"
                    />
                  </>
                )}
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
                  <Button type="submit">
                    {type === "sign-in" ? "Sign in" : "Sign up"}
                  </Button>
                  <p className="mt-5 text-center">Create Account</p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;

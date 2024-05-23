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
import { cn, formSchema } from "@/lib/utils";

const Auth = () => {
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

  const handleFormChange = () => {
    if (type === "sign-in") setType("sign-up");
    else setType("sign-in");
  };

  const [user, setUser] = useState(null);
  const [type, setType] = useState<"sign-in" | "sign-up">("sign-in");

  return (
    <section className="auth-form">
      <div className="flex w-full flex-col items-center gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1 px-4">
          <Image
            src="/icon/LogoBlack.webp"
            alt="logo"
            width={300}
            height={300}
            priority
          />
        </Link>
        <hr className="w-2/3" />
        <div className="flex w-10/12 flex-col gap-1 md:gap-3">
          <h1 className="text-dark_light text-center text-[24px] font-semibold text-gray-900 lg:text-[36px]">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-dark_light pb-5 text-[16px] font-normal text-gray-600">
              {user
                ? "Link your account to get started."
                : "Please, enter your details."}
            </p>
          </h1>
          <div className="flex w-full flex-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-8"
              >
                {type === "sign-up" && (
                  <>
                    <div className="flex justify-between">
                      <div className="w-32 ">
                        <CustomInput
                          control={form.control}
                          name="firstName"
                          label="Your name"
                          nameHolder="example@micamp.com"
                        />
                      </div>
                      <div className="w-32">
                        <CustomInput
                          control={form.control}
                          name="lastName"
                          label="Your last name"
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
                  <p className="my-5 cursor-pointer text-center">
                    Forget password
                  </p>
                  <hr />
                  <p className="mt-5 text-center">
                    {type === "sign-in"
                      ? "Do not have an account yet?"
                      : "Already have an account?"}
                  </p>
                  <p
                    className="cursor-pointer text-center text-sky-600"
                    onClick={handleFormChange}
                  >
                    {type === "sign-in" ? "Sign Up" : "Sign In"}
                  </p>
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

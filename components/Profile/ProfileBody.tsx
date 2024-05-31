import React from "react";
import { z } from "zod";
import { formSchema } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ProfileBody = () => {
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

  // const onSubmit = (data: z.infer<typeof formSchema>) => {
  //   console.log(data);
  // };

  return (
    <section className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how the Toolkit describe you.
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="h-px w-full shrink-0 bg-border"
        ></div>

        <Form {...form}>
          <form className="space-y-5">
            <div className="space-y-2">
              <FormLabel className="text-sm">Username</FormLabel>
              <Input placeholder="example@micamp.com" />
              <p>This is how others see you</p>
            </div>
            <div className="space-y-2">
              <FormLabel className="text-sm">Email</FormLabel>
              <Input placeholder="example@micamp.com" />
              <p>This is your email</p>
            </div>
            <div className="space-y-2">
              <FormLabel className="text-sm">Password</FormLabel>
              <Input placeholder="**********" type="password" />
              <p>Do you want to change your password?</p>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="w-80">
                <FormLabel className="text-sm">Name</FormLabel>
                <Input placeholder="John" type="text" />
              </div>
              <div className="w-80">
                <FormLabel className="text-sm">Surname</FormLabel>
                <Input placeholder="Doe" type="text" />
              </div>
            </div>

            <div className="flex max-lg:justify-center">
              <Button>Update profile</Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ProfileBody;

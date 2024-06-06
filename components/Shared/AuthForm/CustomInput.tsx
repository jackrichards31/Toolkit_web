import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { SignInSchema, SignUpSchema } from "@/schemas";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

// declare type for interface, if the type is sign-in use SignInSchema.
type SchemaType<Type extends string> = Type extends "sign-in"
  ? typeof SignInSchema
  : typeof SignUpSchema;

interface CustomInputProps<Type extends string> {
  control: Control<z.infer<SchemaType<Type>>>;
  name: FieldPath<z.infer<SchemaType<Type>>>;
  label: string;
  nameHolder: string;
  type: Type;
  groups?: { id: number; title: string }[];
}

const CustomInput = <Type extends "sign-in" | "sign-up">({
  control,
  name,
  label,
  nameHolder,
  type,
  groups,
}: CustomInputProps<Type>) => {
  const isSignIn = type === "sign-in";
  return (
    <div>
      <FormField
        key={name}
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label dark:text-white">
              {label}
            </FormLabel>
            <div className="flex w-full flex-col">
              {!isSignIn && label === "Group" ? (
                <>
                  <Select onValueChange={(value) => field.onChange(value)}>
                    <SelectTrigger className="dark:bg-white dark:text-black">
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      {["IT", "Hardware", "Sale", "Support", "Marketing"].map(
                        (item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </>
              ) : (
                <>
                  <FormControl>
                    <Input
                      key={name}
                      placeholder={nameHolder}
                      className="input-class placeholder:opacity-50"
                      type={name === "password" ? "Password" : "Text"}
                      {...field}
                    />
                  </FormControl>
                </>
              )}
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CustomInput;

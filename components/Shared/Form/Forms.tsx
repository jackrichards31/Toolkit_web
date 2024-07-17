"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { z, ZodTypeAny } from "zod";

// Create a dynamic Zod schema based on the form fields
const generateSchemaAndDefaults = (
  formFields: { name: string; defaultValue: any; validation: ZodTypeAny }[],
) => {
  const schema = z.object(
    formFields.reduce(
      (schema, field) => {
        schema[field.name] = field.validation;
        return schema;
      },
      {} as Record<string, ZodTypeAny>,
    ),
  );

  const defaultValues = formFields.reduce(
    (values, field) => {
      values[field.name] = field.defaultValue;
      return values;
    },
    {} as Record<string, any>,
  );

  return { schema, defaultValues };
};

const DynamicForm = ({
  formFields,
  className,
}: {
  formFields: {
    name: string;
    label: string;
    type: string;
    defaultValue: any;
    validation: any;
    options?: string[];
  }[];
  className?: string;
}) => {
  const { schema, defaultValues } = generateSchemaAndDefaults(formFields);
  const [date, setDate] = useState<Date>();

  const forms = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (value: Record<string, any>) => {
    console.log(value);
  };

  return (
    <Form {...forms}>
      <form onSubmit={forms.handleSubmit(onSubmit)} className="space-y-4">
        <div className={className}>
          <div className="grid grid-cols-1">
            {formFields.map((field) => (
              <FormField
                key={field.name}
                control={forms.control}
                name={field.name}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    {field.type === "text" && (
                      <FormControl>
                        <Input placeholder={field.label} {...formField} />
                      </FormControl>
                    )}
                    {field.type === "email" && (
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={field.label}
                          {...formField}
                        />
                      </FormControl>
                    )}
                    {field.type === "date" && (
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !date && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 size-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                    )}
                    {field.type === "select" && (
                      <FormControl>
                        <Select {...formField}>
                          <SelectTrigger>{field.label}</SelectTrigger>
                          <SelectContent>
                            {field.options?.map((option, index) => (
                              <SelectItem key={index} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    )}
                    {field.type === "textarea" && (
                      <FormControl>
                        <Textarea
                          placeholder={field.label}
                          {...formField}
                          className="resize-none"
                        />
                      </FormControl>
                    )}
                    {field.type === "checkbox" && (
                      <FormControl>
                        <Checkbox {...formField} />
                      </FormControl>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default DynamicForm;

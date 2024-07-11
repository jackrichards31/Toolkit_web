"use client";

import React, { useState } from "react";
import { z } from "zod";
import { newMerchantSchema, cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "../ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

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
  SelectValue,
} from "../ui/select";

const NewMerchant = () => {
  const [date, setDate] = useState<Date>();

  const form = useForm<z.infer<typeof newMerchantSchema>>({
    resolver: zodResolver(newMerchantSchema),
    defaultValues: {
      MID: "",
      LegalName: "",
      DBA: "",
      Phone: "",
      Status: "",
      Approval: "",
      Filter: "",
      Processor: "",
      Fitler2: "",
      AgentID: 0,
      SalesRep: "",
      Split: 0,
      SplitName: "",
      SplitID: 0,
      LeadSource: "",
      SplitLead: 0,
      EstAnnual: 0,
      Transactions: 0,
      Filter3: "",
      Banks: "",
      WAVItAccount: 0,
      MCCCode: "",
      Notice: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newMerchantSchema>) => {
    console.log(value);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="MID"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>MID</FormLabel>
                      <FormControl>
                        <Input placeholder="MID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="LegalName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Legal Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Legal Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="DBA"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>DBA</FormLabel>
                      <FormControl>
                        <Input placeholder="DBA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="Phone"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1-480-000-000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="Status"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger id="status">
                            <SelectValue placeholder="Approved" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="denied">Denied</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="Approval"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Aproval Date</FormLabel>
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
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="Filter"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Filter</FormLabel>
                      <FormControl>
                        <Input placeholder="Mocking Data" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="Processor"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Processor</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger id="processor">
                            <SelectValue placeholder="Select processor..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="approved">Intel</SelectItem>
                            <SelectItem value="pending">AMD</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="Fitler2"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Filter</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger id="filter2">
                            <SelectValue placeholder="Select filter..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="approved">Intel</SelectItem>
                            <SelectItem value="pending">AMD</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="AgentID"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Agent ID</FormLabel>
                      <FormControl>
                        <Input placeholder="32254" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="SalesRep"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Sales Rep</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger id="sales rep">
                            <SelectValue placeholder="All countries merchants" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="approved">
                              United States
                            </SelectItem>
                            <SelectItem value="pending">
                              United Kingdom
                            </SelectItem>
                            <SelectItem value="pending">Germany</SelectItem>
                            <SelectItem value="pending">Poland</SelectItem>
                            <SelectItem value="pending">Japan</SelectItem>
                            <SelectItem value="pending">Thailand</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="Split"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Split %</FormLabel>
                      <FormControl>
                        <Input placeholder="12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="SalesRep"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Sales Rep</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger id="sales rep">
                            <SelectValue placeholder="All countries merchants" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="approved">
                              United States
                            </SelectItem>
                            <SelectItem value="pending">
                              United Kingdom
                            </SelectItem>
                            <SelectItem value="pending">Germany</SelectItem>
                            <SelectItem value="pending">Poland</SelectItem>
                            <SelectItem value="pending">Japan</SelectItem>
                            <SelectItem value="pending">Thailand</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewMerchant;

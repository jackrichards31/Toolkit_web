"use client";

import React, { useState } from "react";
import { z } from "zod";
import { newMerchantSchema, cn, formatCurrency } from "@/lib/utils";
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
import { Checkbox } from "../ui/checkbox";

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
    <div className="max-2xl:h-[90vh] max-2xl:overflow-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-5 max-2xl:grid-cols-1">
            <div className="grid grid-cols-2 gap-3 max-2xl:grid-cols-1">
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
                            <SelectItem value="intel">Intel</SelectItem>
                            <SelectItem value="amd">AMD</SelectItem>
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
                            <SelectItem value="filter2.1">Intel</SelectItem>
                            <SelectItem value="filter2.2">AMD</SelectItem>
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
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="gr">Germany</SelectItem>
                            <SelectItem value="pl">Poland</SelectItem>
                            <SelectItem value="jp">Japan</SelectItem>
                            <SelectItem value="th">Thailand</SelectItem>
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
                name="SplitName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Split Name</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger id="sales rep">
                            <SelectValue placeholder="Name of the split" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="name1">Name 1</SelectItem>
                            <SelectItem value="name2">Name 2</SelectItem>
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
                name="SplitID"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Split ID</FormLabel>
                      <FormControl>
                        <Input placeholder="123133" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="LeadSource"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Lead Source</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger id="sales rep">
                            <SelectValue placeholder="All countries merchants" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uslead">
                              United States
                            </SelectItem>
                            <SelectItem value="uklead">
                              United Kingdom
                            </SelectItem>
                            <SelectItem value="grlead">Germany</SelectItem>
                            <SelectItem value="pllead">Poland</SelectItem>
                            <SelectItem value="jplead">Japan</SelectItem>
                            <SelectItem value="thlead">Thailand</SelectItem>
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
                name="EstAnnual"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Est Annual Volumn</FormLabel>
                      <FormControl>
                        <Input placeholder={formatCurrency(25000)} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="Transactions"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Transactions</FormLabel>
                      <FormControl>
                        <Input placeholder={formatCurrency(25000)} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>

            <div className="my-5 hidden w-full border max-2xl:block" />

            {/* Right side */}
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="Filter3"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Filter</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter text..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <div className="grid grid-cols-2">
                <div>
                  <Checkbox /> <span>Child MID</span>
                </div>
                <FormField
                  control={form.control}
                  name="Filter3"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Select>
                            <SelectTrigger id="sales rep">
                              <SelectValue placeholder="Banks" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="scottsdaleBank">
                                Scottsdale Bank
                              </SelectItem>
                              <SelectItem value="chase">Chase</SelectItem>
                              <SelectItem value="boa">BOA</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div>
                  <Checkbox /> <span>WAVit Account?</span>
                </div>
                <FormField
                  control={form.control}
                  name="Filter3"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="7" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div>
                <Checkbox /> <span>WAVit APP (not manual)</span>
              </div>
              <div>
                <Checkbox /> <span>Perform new account tasks immediately</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold">
                  Business Type(s) for onboarding
                </h3>
                <div className="my-5 flex w-[90%] flex-col">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox />
                      <span>Retail</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox />
                      <span>e-Commerce</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox />
                      <span>Restaurant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox />
                      <span>MO/TO</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-2xl font-semibold">Deploys By</h3>
                <Select>
                  <SelectTrigger>Micamp</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="micamp">Micamp</SelectItem>
                    <SelectItem value="agent">Agent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="MCCCode"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>MCC Code</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger>[EditValue is null]</SelectTrigger>
                            <SelectContent>
                              <SelectItem value="micampMCC">Micamp</SelectItem>
                              <SelectItem value="agentMCC">Agent</SelectItem>
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
                  name="Notice"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Notice</FormLabel>
                        <FormControl>
                          <Input placeholder="Micamp Solutions" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end max-2xl:justify-center">
            <Button>Create Merchant</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewMerchant;

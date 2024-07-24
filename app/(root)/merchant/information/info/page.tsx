"use client";
import { useState } from "react";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MerchantInfoSchema } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const MerchantInformation = () => {
  const form = useForm<z.infer<typeof MerchantInfoSchema>>({
    resolver: zodResolver(MerchantInfoSchema),
    defaultValues: {
      MID: "",
      LegalName: "",
      Contact: "",
    },
  });
  const onSubmit = (value: z.infer<typeof MerchantInfoSchema>) => {
    console.log(value);
  };
  return (
    <>
      <div className="size-full grow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5 max-2xl:grid-cols-1">
              <h1 className="text-2xl font-bold text-sky-500">
                Merchant Information:
              </h1>
              <h1 className="text-2xl font-bold text-sky-500">
                Other Merchant Information:
              </h1>
              <div className="grid grid-cols-2 auto-cols-fr	 gap-3 border-r pr-4 max-2xl:grid-cols-1">
                <FormField
                  control={form.control}
                  name="MID"
                  render={({ field }) => {
                    return (
                      <FormItem className="">
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
                      <FormItem className="">
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
                  name="Contact"
                  render={({ field }) => {
                    return (
                      <FormItem className="">
                        <FormLabel>Contact</FormLabel>
                        <FormControl>
                          <Input placeholder="Contact" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className=""> 

                </div>
                <FormField
                  control={form.control}
                  name="Address"
                  render={({ field }) => {
                    return (
                      <FormItem className="">
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="Apt"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Suite/Apartment</FormLabel>
                        <FormControl>
                          <Input placeholder="Suite/Apartment" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="City"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="grid grid-cols-3 gap-3">
                  <FormField
                    control={form.control}
                    name="State"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input placeholder="AZ" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="Zip"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Zip</FormLabel>
                            <FormControl>
                              <Input placeholder="Zip" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="Phone1"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Phone 1</FormLabel>
                          <FormControl>
                            <Input placeholder="(___)-___-____" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="Extension1"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Extension</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="Phone2"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Phone 2</FormLabel>
                          <FormControl>
                            <Input placeholder="(___)-___-____" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="Extension2"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Extension</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="Email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="support@micamp.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="Website"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input placeholder="micamp.com" {...field} />
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
                        <FormLabel>DBA Name</FormLabel>
                        <FormControl>
                          <Input placeholder="DBA Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div></div>
                <div className="col-span-2">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <FormField
                        control={form.control}
                        name="DBAcontact"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>DBA Contact</FormLabel>
                              <FormControl>
                                <Input placeholder="DBA Contact" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                    <div className="ml-4 mt-8 flex items-center gap-2">
                      <Checkbox />
                      <span>Same as Legal</span>
                    </div>
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="DBAaddress"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>DBA Adress</FormLabel>
                        <FormControl>
                          <Input placeholder="DBA Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="DBAapt"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>DBA Suite/Apartment</FormLabel>
                        <FormControl>
                          <Input placeholder="Suite/Apartment" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="DBAcity"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>DBA City</FormLabel>
                        <FormControl>
                          <Input placeholder="DBA City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="grid grid-cols-3 gap-3">
                  <FormField
                    control={form.control}
                    name="DBAstate"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>DBA State</FormLabel>
                          <FormControl>
                            <Input placeholder="AZ" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="DBAzip"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>DBA Zip</FormLabel>
                            <FormControl>
                              <Input placeholder="DBA Zip" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="Notice"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Notice</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>
              <div className="grid w-2/3 auto-rows-min grid-cols-1 gap-3 max-2xl:grid-cols-1">
                <h1 className="border-b border-black text-xl font-semibold">
                  Associated MIDs
                </h1>
                <FormField
                  control={form.control}
                  name="FrontEndPlatform"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Front End Platform</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="buypass">Buypass</SelectItem>
                              <SelectItem value="nashville">
                                Nashville
                              </SelectItem>
                              <SelectItem value="north">North</SelectItem>
                              <SelectItem value="none">None</SelectItem>
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
                  name="FrontEndMID"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Front End MID</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="List here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="FrontEndTID"
                  render={({ field }) => {
                 
                    return (
                      <FormItem className="w-full text-wrap">
                        <FormLabel>Front End TID</FormLabel>
                        <FormControl className=" w-full text-wrap">
                          {/* <Input
                            placeholder="List here"
                            {...field}
                            className="h-40 w-full appearance-none"
                            type="text"
                          /> */}
                          <textarea
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
                        </FormControl>
                        <FormMessage className="text-wrap" />
                      </FormItem>
                    );
                  }}
                />
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="CheckServiceMID"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Check Service MID</FormLabel>
                          <FormControl>
                            <Input placeholder="Check Service MID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="GatewayMID"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Gateway MID</FormLabel>
                          <FormControl>
                            <Input placeholder="Gateway MID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <h1 className="mt-4 border-b border-black text-xl font-semibold">
                  Activity Estimates
                </h1>
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="EstAnnualVolume"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Est Annual Volume</FormLabel>
                          <FormControl>
                            <Input placeholder="$0.00" {...field} />
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
                            <Input placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <h1 className="mt-4 border-b border-black text-xl font-semibold">
                  SIC/MCC Classification
                </h1>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="SICcode"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>SIC Code</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="MCCclassification"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>MCC Classification</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
                <h1 className="mt-4 border-b border-black text-xl font-semibold">
                  Parent/Child MID Link
                </h1>
                <div className="grid grid-cols-3 gap-3 border-b border-black pb-4">
                  <div className="col-span-1">
                    <div className="ml-4 mt-9 flex items-center gap-2">
                      <Checkbox />
                      <span>Child MID</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="Parent"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Parent</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="CloverID"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Clover ID</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
            <div className="mt-8 w-1/2">
              <div className="grid grid-cols-3 gap-3">
                <Button className="bg-blue-500">Save Changes</Button>
                <div className="ml-4 flex items-center gap-2">
                  <Checkbox />
                  <span>See Manager</span>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
export default MerchantInformation;
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
import { ContentItem } from "@/types";
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
import { CheckboxForm, DatePickerForm, InputForm, SelectForm } from "../Shared/InstantForm";
import {
  merchantStatusList,
  merchantProcessorList,
  salesRepList,
  leadSourceList,
  deployByList,
  mccCode,
  splitNameList
}
  from '@/constants/index'


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
      ChildMID: false,
      WAVitAccount: false,
      WAVitApp: false,
      NewAccountTasks: false,
      BusinessRetail: false,
      BusinessEcommerce: false,
      BusinessRestaurant: false,
      BusinessMoTo: false,
      DeployBy: "",
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

              <InputForm
                control={form.control}
                formName="MID"
                label="MID"
                placeholder='Find MID'
              />

              <InputForm
                control={form.control}
                formName="LegalName"
                label="Legal Name"
                placeholder='Tony Stark'
              />

              <InputForm
                control={form.control}
                formName="DBA"
                label="DBA"
                placeholder='DBA'
              />

              <InputForm
                control={form.control}
                formName="Phone"
                label="Phone Number"
                placeholder='+1 (___) ___-_____'
              />

              <SelectForm
                control={form.control}
                formName="Status"
                label="Status"
                content={merchantStatusList}
                placeholder="Select status..."
                valueKey='id'
                displayKey={'name'}
                disabled={false}
                className=''
              />

              <div className="gap-1">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Approval Date</label>
                <DatePickerForm
                  control={form.control}
                  formName="Approval"
                  label=""
                  placeholder="Pick a date"
                />
              </div>

              <InputForm
                control={form.control}
                formName="Filter"
                label="Filter"
                placeholder='Mocking Data'
              />

              <SelectForm
                control={form.control}
                formName="Processor"
                label="Processor"
                content={merchantProcessorList}
                placeholder="Select a Processor..."
                valueKey='id'
                displayKey={'name'}
                disabled={false}
                className=''
              />

              <InputForm
                control={form.control}
                formName="Filter2"
                label="Filter"
                placeholder='Mocking data'
              />

              <InputForm
                control={form.control}
                formName="AgentID"
                label="Agent ID"
                placeholder='32254'
              />

              <SelectForm
                control={form.control}
                formName="SalesRep"
                label="Sales Rep"
                content={salesRepList}
                placeholder="Select a sales rep..."
                valueKey='id'
                displayKey='name'
                disabled={false}
                className=''
              />

              <InputForm
                control={form.control}
                formName="Split"
                label="Split %"
                placeholder='10 %'
              />

              <SelectForm
                control={form.control}
                formName="SplitName"
                label="Split Name"
                content={splitNameList}
                placeholder=""
                valueKey='id'
                displayKey='name'
                disabled={false}
                className=''
              />

              <InputForm
                control={form.control}
                formName="SplitID"
                label="Split ID"
                placeholder='123654'
              />

              <SelectForm
                control={form.control}
                formName="LeadSource"
                label="Lead Source"
                content={leadSourceList}
                placeholder="Select a lead source..."
                valueKey='id'
                displayKey='name'
                disabled={false}
                className=''
              />

              <InputForm
                control={form.control}
                formName="Split"
                label="Split %"
                placeholder='10 %'
              />

              <InputForm
                control={form.control}
                formName="EstAnnual"
                label="Est Annual Volumn"
                placeholder='$20,000.00'
              />

              <InputForm
                control={form.control}
                formName="Transactions"
                label="Transactions"
                placeholder='20,00'
              />
            </div>

            <div className="my-5 hidden w-full border max-2xl:block" />

            {/* Right side */}
            <div className="grid gap-3">

              <InputForm
                control={form.control}
                formName="Filter3"
                label="Filter"
                placeholder='Enter text...'
              />

              <div className="grid grid-cols-2">
                {/* Child MID */}
                <div className="flex content-center h-full">
                  <CheckboxForm
                    control={form.control}
                    formName="ChildMID"
                    label=""
                    placeholder=""
                    className="content-center items-center align-middle mt-3"
                  />
                  <span className="content-center mt-1">Child MID</span>
                </div>
                {/* Banks */}
                <div className="content-center h-full">
                  <SelectForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    content={[
                      { denied: "denied" },
                      { pending: "pending" },
                      { approved: "approved" }
                    ]}
                    placeholder="Banks"
                    valueKey={"sa"}
                    displayKey={"sa"}
                    disabled={false}
                    className='m-0'
                  />
                </div>
                {/* Wavit Account? */}
                <div className="flex content-center h-full">
                  <div className="content-center">
                    <CheckboxForm
                      control={form.control}
                      formName="WAVitAccount"
                      label=""
                      placeholder=""
                    />
                  </div>
                  <span className="content-center mt-1">WAVit Account?</span>
                </div>
                {/* Number */}
                <div className="content-center h-full">
                  <InputForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    placeholder='7'
                  />
                </div>
              </div>

              {/* WAVit APP (not manual) */}
              <div className="flex content-center h-full">
                <div className="content-center">
                  <CheckboxForm
                    control={form.control}
                    formName="WAVitApp"
                    label=""
                    placeholder=""
                  />
                </div>
                <span className="content-center mt-1">WAVit APP (not manual)</span>
              </div>
              <div className="flex content-center h-full">
                <div className="content-center">
                  <CheckboxForm
                    control={form.control}
                    formName="NewAccountTasks"
                    label=""
                    placeholder=""
                  />
                </div>
                <span className="content-center mt-1">Perform new account tasks immediately</span>
              </div>



              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold">
                  Business Type(s) for onboarding
                </h3>
                <div className="my-5 flex w-[100%] flex-col">
                  <div className="flex justify-between">
                    {/* Retail */}
                    <div className="flex content-center h-full">
                      <div className="content-center">
                        <CheckboxForm
                          control={form.control}
                          formName="BusinessRetail"
                          label=""
                          placeholder=""
                        />
                      </div>
                      <span className="content-center mt-1 text-sm">Retail</span>
                    </div>
                    {/* e-Commerce */}
                    <div className="flex content-center h-full">
                      <div className="content-center">
                        <CheckboxForm
                          control={form.control}
                          formName="BusinessEcommerce"
                          label=""
                          placeholder=""
                        />
                      </div>
                      <span className="content-center mt-1 text-sm">e-Commerce</span>
                    </div>
                    {/* Restaurant */}
                    <div className="flex content-center h-full">
                      <div className="content-center">
                        <CheckboxForm
                          control={form.control}
                          formName="BusinessRestaurant"
                          label=""
                          placeholder=""
                        />
                      </div>
                      <span className="content-center mt-1 text-sm">Restaurant</span>
                    </div>
                    {/* MO / TO */}
                    <div className="flex content-center h-full">
                      <div className="content-center">
                        <CheckboxForm
                          control={form.control}
                          formName="BusinessMoTo"
                          label=""
                          placeholder=""
                        />
                      </div>
                      <span className="content-center mt-1 text-sm">MO/TO</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-2xl font-semibold">Deploys By</h3>
                <div className="w-full">
                  <SelectForm
                    control={form.control}
                    formName="DeployBy"
                    label=""
                    content={deployByList}
                    placeholder="Select an option..."
                    valueKey='id'
                    displayKey='name'
                    disabled={false}
                    className='m-0'
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <SelectForm
                  control={form.control}
                  formName="MCCCode"
                  label="MCC Code"
                  content={mccCode}
                  placeholder="Select a MCC Code..."
                  valueKey='id'
                  displayKey='name'
                  disabled={false}
                  className='m-0'
                />
                <InputForm
                  control={form.control}
                  formName="Notice"
                  label="Notice"
                  placeholder='Enter your notice'
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

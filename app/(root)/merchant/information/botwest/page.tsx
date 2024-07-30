"use client";
import React from 'react'
import ExtremeDataTable from '@/components/Shared/DataTable/DataTable'
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { newMerchantSchema, cn, formatCurrency } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DatePickerForm, SelectForm, CheckboxForm, InputForm } from "@/components/Shared/InstantForm";
import { equipmentTable1, equipmentTable2, equipmentTable3, equipmentList1, merchantProcessorList } from "@/constants";

const page = () => {
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
  const itemsList = [
    {
      id: 1,
      title: "Agent / Rep. Name",
      type: "input",
      value: ""
    },
    {
      id: 2,
      title: "Branch Name",
      type: "input",
      value: ""
    },
    {
      id: 3,
      title: "ABA Routing #",
      type: "input",
      value: ""
    },
    {
      id: 4,
      title: "DDA Checking Act. #",
      type: "input",
      value: ""
    },
    {
      id: 5,
      title: "Federal Tax ID #",
      type: "input",
      value: ""
    },
    {
      id: 6,
      title: "Banker",
      type: "input",
      value: ""
    },
    {
      id: 7,
      title: "Division Name",
      type: "input",
      value: ""
    },
    {
      id: 8,
      title: "Region Name",
      type: "input",
      value: ""
    },
    {
      id: 9,
      title: "Segment Name",
      type: "input",
      value: ""
    },
    {
      id: 10,
      title: "Referral Lead #",
      type: "input",
      value: ""
    },
    {
      id: 11,
      title: "Entity",
      type: "input",
      value: ""
    },
    {
      id: 12,
      title: "Client Group",
      type: "input",
      value: ""
    },
    {
      id: 13,
      title: "Agent / Rep. Code",
      type: "input",
      value: ""
    },
    {
      id: 14,
      title: "Branch Code",
      type: "input",
      value: ""
    },
    {
      id: 15,
      title: "Banker Employee ID",
      type: "input",
      value: ""
    },
    {
      id: 16,
      title: "Division / LOB #",
      type: "input",
      value: ""
    },
    {
      id: 17,
      title: "Region #",
      type: "input",
      value: ""
    },
  ]

  return (
    <>
      <section>
        <h1 className='text-2xl text-sky-500 mb-3'>Bank of The West</h1>


        {/* FIRST COLUMN */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Processor Information */}
            <h1 className='text-xl font-bold text-center m-auto'>Information</h1>

            <div className="grid grid-rows-10 grid-flow-col gap-2">
              {itemsList.map((item) => {
                return (
                  <div className='flex gap-4 m-auto w-full'>
                    <div className='w-2/4 text-end content-center'>
                      <p className=''>{item.title}</p>
                    </div>
                    <div className='w-1/2'>
                      <InputForm
                        control={form.control}
                        formName="Filter3"
                        label=""
                        placeholder='Enter text...'
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </form>
        </Form>

      </section>
    </>
  )
}

export default page
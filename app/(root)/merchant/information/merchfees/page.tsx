"use client";
import React from 'react'
import ExtremeDataTable from '@/components/Shared/DataTable/DataTable'
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { newMerchantSchema, cn, formatCurrency } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Calendar } from '@/components/ui/calendar';
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
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
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


  return (
    <>
      <section>
        <h1 className='text-2xl text-sky-500 mb-3'>Merch Fees / Proc</h1>


        {/* FIRST COLUMN */}
        <div className='w-auto rounded-md min-h-96 mb-5'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              {/* Processor Information */}
              <h1 className='text-xl font-bold text-center m-auto'>Processor Information</h1>
              <div className='flex flex-wrap w-full mt-0'>
                {/* FIRST COLUMN */}
                <div className='flex-auto'>
                  <div className='w-3/4 m-auto mb-2' >
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label="Return Equipment"
                      content={merchantProcessorList}
                      placeholder="Select a processor"
                      valueKey={"id"}
                      displayKey={"name"}
                      disabled={false}
                      className=''
                    />
                  </div>
                  <div className="flex w-2/4 m-auto content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">MiCamp is Master ISO</span>
                  </div>
                </div>
                {/* SECOND COLUMN */}
                <div className='flex-auto text-center self-center'>

                  <div className="flex content-center m-auto">
                    <div className="content-center text-nowrap">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">Is WAVit Account (Split or discount)</span>
                  </div>
                  <div className="flex content-center m-auto">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">Is WAVit Equip Replacement Program</span>
                  </div>
                  <div className="flex content-center m-auto">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">Is Nutra Account?</span>
                  </div>
                  <div className="flex content-center m-auto">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">WAVit APP (not manual)</span>
                  </div>
                  <div className="flex content-center m-auto">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">Is Free POS Program?</span>
                  </div>
                </div>
              </div>
              <hr className='bg-gray-400 border-gray-400' />
              {/* FEE INFORMATION */}
              <h1 className='text-xl font-bold text-center m-auto'>Fee Information</h1>
              <div className="flex flex-wrap w-full mt-0">

                {/* PRODUCT FEE */}
                <div className="flex-auto mt-2">
                  <h1 className='text-lg font-semibold text-center m-auto'>Product Fee</h1>
                  <div className="flex content-center m-auto">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">Merchant Annual</span>
                  </div>
                  <div className="flex content-center m-auto">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">PCI Annual</span>
                  </div>
                  <div className="flex content-center m-auto">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">PCI Monthly</span>
                  </div>
                  <div className="flex content-center m-auto">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="content-center mt-1">Rate Increases</span>
                  </div>
                </div>
                {/* Amount */}
                <div className="flex-auto mt-2">
                  <h1 className='text-lg font-semibold text-center m-auto'>Product Fee</h1>
                  <InputForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    placeholder='Enter text...'
                  />
                  <InputForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    placeholder='Enter text...'
                  />
                  <InputForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    placeholder='Enter text...'
                  />
                </div>
                {/* BILLING MONTH */}
                <div className="flex-auto mt-2">
                  <h1 className='text-lg font-semibold text-center m-auto'>Billing Month</h1>
                  <div className='w-3/4 m-auto mb-2' >
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=''
                    />
                  </div>
                  <div className='w-3/4 m-auto mb-2' >
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=''
                    />
                  </div>

                </div>
                {/* STATUS / NON-BILLING RATIONAL */}
                <div className="flex-auto mt-2">
                  <h1 className='text-lg font-semibold text-center m-auto'>Status / Non-Billing Rational</h1>
                  <div className='w-full m-auto mb-2' >
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=''
                    />
                  </div>
                  <div className='w-full m-auto mb-2' >
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=''
                    />
                  </div>
                  <div className='w-full m-auto mb-2' >
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=''
                    />
                  </div>
                  <div className='w-full m-auto mb-2' >
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=''
                    />
                  </div>
                </div>
              </div>
              <hr className='bg-gray-400 border-gray-400' />
              {/* MiCamp PROCESSING DATA */}
              <h1 className='text-xl font-bold text-center m-auto'>MiCamp Processing Data</h1>
              <div className="w-full m-auto text-center">
                <div className='w-2/4 m-auto mb-2' >
                  <SelectForm
                    control={form.control}
                    formName="SalesRep"
                    label="Last Process Date"
                    content={equipmentList1}
                    placeholder="Select an option..."
                    valueKey={"id"}
                    displayKey={"title"}
                    disabled={false}
                    className=''
                  />
                </div>
              </div>

              <hr className='bg-gray-400 border-gray-400' />
              <div className="text-center">
                <Button className="self-end flex-auto px-10 bg-gradient-to-r from-[#79CB6C] to-[#285C20] hover:opacity-90 text-white">
                  Update
                </Button>
              </div>

            </form>
          </Form>
        </div>
      </section>
    </>
  )
}

export default page
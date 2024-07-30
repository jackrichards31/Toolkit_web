"use client";

import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { accountStatusTable, activityRecordList  } from "@/constants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { newMerchantSchema, cn, formatCurrency } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DatePickerForm, SelectForm, CheckboxForm } from "@/components/Shared/InstantForm";


const AccountStatusPreview = () => {

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


  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "UserID", header: "User ID" },
    { accessorKey: "SQL", header: "SQL" },
  ];

  const columns = createColumns(columnsConfig);


  return (
    <>
      <div className="mb-3 mt-0 grow rounded-lg border border-solid border-gray-400 shadow-md p-4">
        <h1 className="text-3xl text-sky-500">Account Status Preview</h1>
        <div className="flex gap-3">
          <div className="w-2/3">
          <DataTable
            columns={columns}
            data={accountStatusTable}
            enableColumnFilter={true}
            filteredBy='UserID'
            pagination={false}
            />
          </div>
          <div className="w-1/3 max-lg:hidden mt-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <SelectForm
                    control={form.control}
                    formName="SalesRep"
                    label="Select an Activity to Record"
                    content={activityRecordList}
                    placeholder="Select an Activity..."
                    valueKey='id'
                    displayKey='title'
                    disabled={false}
                  />
                  <Button variant="default" className="w-full m-0 mt-0 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                    SUBMIT
                  </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountStatusPreview;

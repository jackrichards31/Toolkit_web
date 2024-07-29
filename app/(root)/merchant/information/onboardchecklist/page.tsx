"use client";
import React from 'react'

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { newMerchantSchema, cn, formatCurrency } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ContentItem, DataTypes } from "@/types";
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
import { DatePickerForm, SelectForm, CheckboxForm } from "@/components/Shared/InstantForm";
import { onboardCheckListTable } from "@/constants";
import DataTable from '@/components/Shared/DataTable/DataTable';
import { ColumnConfig, createColumns } from '@/components/Shared/DataTable/Columns';

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

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "ID", header: "ID" },
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "ID2", header: "ID2" },
    { accessorKey: "Documents", header: "Documents" } 
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section>
        <h1 className='text-2xl text-sky-500 mb-3'>Onboard Check List</h1>

        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <Checkbox />
            <span className='text-nowrap'>Retail</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox />
            <span className='text-nowrap'>e-Commerce</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox />
            <span className='text-nowrap'>Restaurant</span>
          </div>
        </div>
        <div className='w-full h-full mt-3 flex-1 bg-zinc-800 rounded-md mb-5'>

          <DataTable
          columns={columns}
          data={onboardCheckListTable}
          enableColumnFilter={true}
          filteredBy='Documents'
          />

        </div>

      </section>
    </>
  )
}

export default page
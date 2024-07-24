import React from 'react'
import { z } from "zod";
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
  import { newMerchantSchema, cn, formatCurrency } from "@/lib/utils";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useForm } from "react-hook-form";
  import { Button } from "@/components/ui/button";
import { Calendar } from "../ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import MerchantAccessOneApiTab from './accessOneApi/MerchantAccessOneApiTab';

const MerchantInformation = () => {

const formInputs = [
    {
        id: '1',

    }
];
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
    <>
        <div className="grow p-4 border rounded-md border-solid border-gray-600">
            <MerchantAccessOneApiTab/>


            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" >
                    <h1 className="text-sky-500 text-3xl mt-4">Merchant Information:</h1>
                    
                    <div className='max-h-full w-1/2' >
                      <FormField
                      control={form.control}
                      name="MID"
                      render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>MID</FormLabel>
                          <FormControl>
                              <Input placeholder="MID" className='max-h-full' type='text' {...field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                        );
                      }}
                      />  
                    </div>






                        <div className="flex justify-end max-2xl:justify-center">
                            <Button>Create Merchant</Button>
                        </div>
                    </form>

            </Form>

            

        </div>
    
    </>
  );
}

export default MerchantInformation 
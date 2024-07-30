/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { newMerchantSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  SelectForm,
  CheckboxForm,
  InputForm,
} from "@/components/Shared/InstantForm";
import { equipmentList1, merchantProcessorList } from "@/constants";

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
        <h1 className="mb-3 text-2xl text-sky-500">Merch Fees / Proc</h1>

        {/* FIRST COLUMN */}
        <div className="mb-5 min-h-96 w-auto rounded-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              {/* Processor Information */}
              <h1 className="m-auto text-center text-xl font-bold">
                Processor Information
              </h1>
              <div className="mt-0 flex w-full flex-wrap">
                {/* FIRST COLUMN */}
                <div className="flex-auto">
                  <div className="m-auto mb-2 w-3/4">
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label="Return Equipment"
                      content={merchantProcessorList}
                      placeholder="Select a processor"
                      valueKey={"id"}
                      displayKey={"name"}
                      disabled={false}
                      className=""
                    />
                  </div>
                  <div className="m-auto flex w-2/4 content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">
                      MiCamp is Master ISO
                    </span>
                  </div>
                </div>
                {/* SECOND COLUMN */}
                <div className="flex-auto self-center text-center">
                  <div className="m-auto flex content-center">
                    <div className="content-center text-nowrap">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">
                      Is WAVit Account (Split or discount)
                    </span>
                  </div>
                  <div className="m-auto flex content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">
                      Is WAVit Equip Replacement Program
                    </span>
                  </div>
                  <div className="m-auto flex content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">
                      Is Nutra Account?
                    </span>
                  </div>
                  <div className="m-auto flex content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">
                      WAVit APP (not manual)
                    </span>
                  </div>
                  <div className="m-auto flex content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">
                      Is Free POS Program?
                    </span>
                  </div>
                </div>
              </div>
              <hr className="border-gray-400 bg-gray-400" />
              {/* FEE INFORMATION */}
              <h1 className="m-auto text-center text-xl font-bold">
                Fee Information
              </h1>
              <div className="mt-0 flex w-full flex-wrap">
                {/* PRODUCT FEE */}
                <div className="mt-2 flex-auto">
                  <h1 className="m-auto text-center text-lg font-semibold">
                    Product Fee
                  </h1>
                  <div className="m-auto flex content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">Merchant Annual</span>
                  </div>
                  <div className="m-auto flex content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">PCI Annual</span>
                  </div>
                  <div className="m-auto flex content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">PCI Monthly</span>
                  </div>
                  <div className="m-auto flex content-center">
                    <div className="content-center">
                      <CheckboxForm
                        control={form.control}
                        formName="WAVitAccount"
                        label=""
                        placeholder=""
                      />
                    </div>
                    <span className="mt-1 content-center">Rate Increases</span>
                  </div>
                </div>
                {/* Amount */}
                <div className="mt-2 flex-auto">
                  <h1 className="m-auto text-center text-lg font-semibold">
                    Product Fee
                  </h1>
                  <InputForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    placeholder="Enter text..."
                  />
                  <InputForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    placeholder="Enter text..."
                  />
                  <InputForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    placeholder="Enter text..."
                  />
                </div>
                {/* BILLING MONTH */}
                <div className="mt-2 flex-auto">
                  <h1 className="m-auto text-center text-lg font-semibold">
                    Billing Month
                  </h1>
                  <div className="m-auto mb-2 w-3/4">
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=""
                    />
                  </div>
                  <div className="m-auto mb-2 w-3/4">
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
                {/* STATUS / NON-BILLING RATIONAL */}
                <div className="mt-2 flex-auto">
                  <h1 className="m-auto text-center text-lg font-semibold">
                    Status / Non-Billing Rational
                  </h1>
                  <div className="m-auto mb-2 w-full">
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=""
                    />
                  </div>
                  <div className="m-auto mb-2 w-full">
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=""
                    />
                  </div>
                  <div className="m-auto mb-2 w-full">
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=""
                    />
                  </div>
                  <div className="m-auto mb-2 w-full">
                    <SelectForm
                      control={form.control}
                      formName="SalesRep"
                      label=""
                      content={equipmentList1}
                      placeholder="Select an option..."
                      valueKey={"id"}
                      displayKey={"title"}
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <hr className="border-gray-400 bg-gray-400" />
              {/* MiCamp PROCESSING DATA */}
              <h1 className="m-auto text-center text-xl font-bold">
                MiCamp Processing Data
              </h1>
              <div className="m-auto w-full text-center">
                <div className="m-auto mb-2 w-2/4">
                  <SelectForm
                    control={form.control}
                    formName="SalesRep"
                    label="Last Process Date"
                    content={equipmentList1}
                    placeholder="Select an option..."
                    valueKey={"id"}
                    displayKey={"title"}
                    disabled={false}
                    className=""
                  />
                </div>
              </div>

              <hr className="border-gray-400 bg-gray-400" />
              <div className="text-center">
                <Button className="flex-auto self-end bg-gradient-to-r from-[#79CB6C] to-[#285C20] px-10 text-white hover:opacity-90">
                  Update
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default page;

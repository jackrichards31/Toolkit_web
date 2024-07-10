"use client";

import MerchantSearch from "@/components/merchants/MerchantSearch";
import ExtremeDataTable from "@/components/Shared/DataTable/DataTable";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { merchantTabs } from "@/constants";
import React from "react";

export default function DataTable() {
  return (
    <>
      <div className="w-2/3 rounded-md border p-5 max-sm:w-fit md:w-full">
        <Tabs defaultValue="mid" className="mb-4 w-full">
          <TabsList className="w-full">
            {merchantTabs.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="w-full"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {merchantTabs.map((item) => (
            <TabsContent key={item.value} value={item.value} className="mt-5">
              <h1 className="font-semibold">Merchant - Find ({item.title})</h1>
              <MerchantSearch />
              <ExtremeDataTable />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}

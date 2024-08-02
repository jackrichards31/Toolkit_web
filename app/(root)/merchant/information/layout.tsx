"use client";

import React from "react";
import MerchantsInformationTab from "@/components/merchants/MerchantsInformationTab";
import MerchantInfoSummary from "@/components/merchants/MerchantInfoSummary";


const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {" "}
      <MerchantInfoSummary />
      <div className="flex gap-3">
        <MerchantsInformationTab />
        <div className="mb-0 h-auto w-auto grow rounded-lg border border-solid border-gray-400 p-5 shadow-md">
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;

"use client";

import React from "react";
import MerchantsInformationTab from "@/components/merchants/MerchantsInformationTab";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className="flex gap-3">
        <MerchantsInformationTab />
        <div className="mb-0 size-auto grow rounded-lg border border-solid border-gray-600 p-5">
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;

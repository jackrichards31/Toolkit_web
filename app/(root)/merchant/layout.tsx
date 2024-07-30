"use client";

import React from "react";
import MerchantMainTabs from "@/components/merchants/MerchantMainTabs";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full px-12 max-sm:w-fit">
      <MerchantMainTabs />
      <div className="mb-0 h-auto rounded-r-lg rounded-bl-lg border border-solid border-gray-600 p-5">
        {children}
      </div>
    </div>
  );
};

export default layout;

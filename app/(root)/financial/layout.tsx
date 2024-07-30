import FinancialMainTabs from "@/components/financial/FinancialTabs";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="p-12">
      <FinancialMainTabs />
      {children}
    </div>
  );
};

export default layout;

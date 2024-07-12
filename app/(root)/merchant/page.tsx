// import MerchantTables from "@/components/Shared/DataTable/MerchantTables";
import React from "react";
import DataTable from "./data-table";

const Merchants = async () => {
  return (
    <>
      <div className="px-12 max-2xl:mb-3 max-lg:w-full">
        {/* <MerchantTables /> */}
        <DataTable />
      </div>
    </>
  );
};

export default Merchants;

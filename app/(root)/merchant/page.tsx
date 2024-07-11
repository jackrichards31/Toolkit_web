// import MerchantTables from "@/components/Shared/DataTable/MerchantTables";
import React from "react";
import DataTable from "./data-table";

const Merchants = async () => {
  return (
    <>
      <div className="max-2xl:mb-3 lg:px-12">
        {/* <MerchantTables /> */}
        <DataTable />
      </div>
    </>
  );
};

export default Merchants;

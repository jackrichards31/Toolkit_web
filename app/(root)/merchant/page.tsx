// import MerchantTables from "@/components/Shared/DataTable/MerchantTables";
import React from "react";
import ExtremeDataTable from "@/components/Shared/DataTable/DataTable";
import { employees } from "@/constants";

const Merchants = async () => {
  return (
    <>
      <div className="px-12 max-2xl:mb-3 max-lg:w-full">
        {/* <MerchantTables /> */}
        <ExtremeDataTable
          pageSize={10}
          data={employees}
          columnsToDisplay={["EmployeeID", "FullName", "City", "Country"]}
        />
      </div>
    </>
  );
};

export default Merchants;

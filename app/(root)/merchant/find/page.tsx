"use client";

import React from "react";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { employees } from "@/constants";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

const columnsConfig: ColumnConfig<DataTypes>[] = [
  { accessorKey: "EmployeeID", header: "ID" },
  { accessorKey: "FullName", header: "Name" },
  { accessorKey: "Address", header: "Address" },
  { accessorKey: "City", header: "City" },
  { accessorKey: "Region", header: "Region" },
  { accessorKey: "PostalCode", header: "Postal Code" },
  { accessorKey: "Country", header: "Country" },
  { accessorKey: "HomePhone", header: "Phone" },
  { accessorKey: "Position", header: "Position" },
  { accessorKey: "BirthDate", header: "Birth Date" },
];

const columns = createColumns(columnsConfig);

const Page = () => {
  return (
    <DataTable
      <div className='w-full'>
      columns={columns}
      data={employees}
      enableColumnFilter={true}
      filteredBy="FullName"
      </div>
    />
  );
};

export default Page;

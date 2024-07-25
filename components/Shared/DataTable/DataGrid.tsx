"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import DataTable from "./DataTable";
import { ColumnConfig, createColumns } from "./Columns";
import { Orders } from "@/constants";
import { DataTypes } from "@/types";

export default function DataGrid() {
  const columnConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "customer", header: "Customer's Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "type", header: "Type" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "amount", header: "Amount" },
  ];

  const columns = createColumns(columnConfig);
  return (
    <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Orders</CardTitle>
          <CardDescription>Recent orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={Orders} />
        </CardContent>
      </Card>
    </div>
  );
}

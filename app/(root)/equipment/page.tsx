"use client";

import EquipmentForm from "@/components/equipments/EquipmentForm";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { equipmentData } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";

const data = [
  {
    id: 1,
    title: "Date, Type",
    value: "DateType",
  },
  {
    id: 2,
    title: "Date, Type, Agent",
    value: "DateTypeAgent",
  },
  {
    id: 3,
    title: "Date",
    value: "Date",
  },
  {
    id: 4,
    title: "Agent",
    value: "SumAgent",
  },
  {
    id: 5,
    title: "Status",
    value: "Status",
  },
  {
    id: 6,
    title: "Process",
    value: "Process",
  },
  {
    id: 7,
    title: "Sales",
    value: "SalesReport",
  },
];

const columnsConfig: ColumnConfig<DataTypes>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "brand", header: "Brand" },
  { accessorKey: "model", header: "Model" },
  { accessorKey: "purchaseDate", header: "Purchase" },
  { accessorKey: "warrantyExpiration", header: "Warranty Expiration" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "assignedTo", header: "Assigned" },
  { accessorKey: "price", header: "Price" },
];

const columns = createColumns(columnsConfig);

const Equipment = () => {
  return (
    <div className="grid grid-cols-2 overflow-auto p-12 max-2xl:grid-cols-1">
      <Tabs defaultValue="DateType" className="size-full">
        <TabsList>
          {data.map((tab) => (
            <TabsTrigger value={tab.value} key={tab.id}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.map((tab) => (
          <TabsContent value={tab.value} key={tab.id}>
            <EquipmentForm type={tab.value} />
          </TabsContent>
        ))}
      </Tabs>
      <DataTable columns={columns} data={equipmentData} />
    </div>
  );
};

export default Equipment;

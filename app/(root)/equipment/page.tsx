import EquipmentForm from "@/components/equipments/EquipmentForm";
import ExtremeDataTable from "@/components/Shared/DataTable/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { equipmentData } from "@/constants";
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
      <ExtremeDataTable
        data={equipmentData}
        pageSize={10}
        columnsToDisplay={["id", "name", "brand", "model", "status", "price"]}
      />
    </div>
  );
};

export default Equipment;

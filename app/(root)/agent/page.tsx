"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { agentData } from "@/constants";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";

const AgentSetup = dynamic(() => import("@/components/agent/AgentSetup"), {
  ssr: false,
});

const Page = () => {
  const list = useMemo(
    () => [
      { id: 1, title: "List", value: "list" },
      { id: 2, title: "Setup", value: "setup" },
      { id: 3, title: "Reports", value: "report" },
    ],
    [],
  );

  const ColumnConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Agent's Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "location", header: "Location" },
  ];

  const columns = createColumns(ColumnConfig);
  return (
    <div>
      <Tabs defaultValue="list" className="size-full p-12">
        <TabsList>
          {list.map((item) => (
            <TabsTrigger value={item.value} key={item.id}>
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="list">
          <DataTable columns={columns} data={agentData} />
        </TabsContent>
        <TabsContent value="setup">
          <AgentSetup />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;

"use client";

import AgentSetup from "@/components/agent/AgentSetup";
import ExtremeDataTable from "@/components/Shared/DataTable/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { agentData } from "@/constants";
import React from "react";

const page = () => {
  const list = [
    { id: 1, title: "List", value: "list" },
    { id: 2, title: "Setup", value: "setup" },
    { id: 3, title: "Reports", value: "report" },
  ];
  return (
    <div>
      <Tabs defaultValue="list" className="size-full p-12">
        <TabsList>
          {list.map((list) => (
            <TabsTrigger value={list.value} key={list.id}>
              {list.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {list.map((tab) => (
          <div key={tab.value}>
            {tab.value === "list" && (
              <TabsContent value={tab.value} key={tab.id}>
                <ExtremeDataTable data={agentData} pageSize={10} />
              </TabsContent>
            )}

            {tab.value === "setup" && (
              <TabsContent value={tab.value} key={tab.id}>
                <AgentSetup />
              </TabsContent>
            )}
          </div>
        ))}
      </Tabs>
    </div>
  );
};

export default page;

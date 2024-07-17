import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgentContent from "./AgentContent";
import DynamicForm from "../Shared/Form/Forms";
import { AgentSetupFields } from "@/constants";

const AgentSetup = () => {
  const tabs = [
    {
      id: "1",
      title: "Residuals",
      value: "residuals",
    },
    {
      id: "2",
      title: "Billing",
      value: "billing",
    },
    {
      id: "3",
      title: "Customer Finance",
      value: "customerFinance",
    },
    {
      id: "4",
      title: "Equipment",
      value: "equipment",
    },
    {
      id: "5",
      title: "Documentation",
      value: "documentation",
    },
    {
      id: "6",
      title: "Reporting",
      value: "reporting",
    },
    {
      id: "7",
      title: "Email Lists",
      value: "emailList",
    },
    {
      id: "8",
      title: "Adjustments",
      value: "adjustments",
    },
  ];
  return (
    <div className="grid grid-cols-2">
      <DynamicForm formFields={AgentSetupFields} />
      <Tabs defaultValue="residuals" className="w-full">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((content) => {
          return (
            <TabsContent key={content.id} value={content.value}>
              <div className="flex">
                <AgentContent value={content.value} />
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default AgentSetup;

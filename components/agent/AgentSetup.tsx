import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgentContent from "./AgentContent";
import { AgentSetupTabs } from "@/constants";
import AgentSetupForm from "./AgentSetupForm";

const AgentSetup = () => {
  return (
    <div className="grid grid-cols-2">
      <AgentSetupForm />
      <Tabs defaultValue="residuals" className="w-full">
        <TabsList>
          {AgentSetupTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {AgentSetupTabs.map((content) => {
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

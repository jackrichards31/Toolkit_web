"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import ExtremeDataTable from "../Shared/DataTable/DataTable";
import { agentData } from "@/constants";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const AgentContent = ({ value }: { value: string }) => {
  const [activeItem, setActiveItem] = useState<string>("");
  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  const navItems = [
    { id: "1", title: "FD Omaha", value: "fd-omaha" },
    { id: "2", title: "FD North", value: "fd-north" },
    { id: "3", title: "Splits", value: "splits" },
    { id: "4", title: "Calculations", value: "calculations" },
  ];
  return (
    <div className="flex gap-5">
      <div className="flex flex-col">
        {navItems.map((item) => {
          const isActive = activeItem === item.value;
          return (
            <Button
              key={item.value}
              className={`${isActive ? "bg-slate-300 text-black shadow-md dark:bg-zinc-800 dark:text-white" : "text-black dark:text-white"} flex w-full items-center justify-start gap-4 rounded-lg bg-transparent p-4`}
              onClick={() => handleClick(item.value)}
              variant="ghost"
            >
              {item.title}
            </Button>
          );
        })}
      </div>

      <div className="flex flex-col">
        <ExtremeDataTable
          pageSize={10}
          data={agentData}
          columnsToDisplay={["id", "name", "email", "department", "phone"]}
        />

        <div className="my-5 text-center">
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2">
              <p>Schedule A</p>
              <Select>
                <SelectTrigger>Select an option</SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-full flex-col justify-center gap-2">
              <div className="flex flex-col justify-center gap-2">
                <Button>Print Schedule A</Button>
                <Button>Apply Schedule A</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentContent;

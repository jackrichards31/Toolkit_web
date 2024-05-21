import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import WelcomeBar from "@/components/Home/WelcomeBar";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="relative flex-1">
        <WelcomeBar user="Tony" />
        {children}
      </div>
    </div>
  );
};

export default layout;

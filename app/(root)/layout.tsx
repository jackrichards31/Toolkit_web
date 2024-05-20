import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;

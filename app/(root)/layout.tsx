import React from "react";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import WelcomeBar from "@/components/Shared/Home/WelcomeBar";
import Footer from "@/components/Shared/Footer/Footer";
import MobileNav from "@/components/Shared/Sidebar/MobileNav";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="relative flex-1">
        <WelcomeBar user="Tony" />
        <MobileNav user="Tony" />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;

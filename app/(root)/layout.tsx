import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import WelcomeBar from "@/components/Home/WelcomeBar";
import Footer from "@/components/Footer/Footer";
import MobileNav from "@/components/Sidebar/MobileNav";

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

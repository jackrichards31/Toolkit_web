"use client";

import React from "react";
import { merchantTabs } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MerchantTabs = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex h-16 items-center justify-between border-b bg-background">
        {merchantTabs.map((item) => {
          const isActive =
            (pathname?.includes(item.value) && item.title.length > 1) ||
            pathname === item.title;
          return (
            <Link
              className={`${isActive ? "bg-slate-300 shadow-md dark:bg-zinc-800" : ""} flex items-center justify-start gap-4 rounded-lg bg-transparent p-4`}
              key={item.title}
              href={`/merchant/`}
            >
              {React.createElement(item.icons)}
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MerchantTabs;

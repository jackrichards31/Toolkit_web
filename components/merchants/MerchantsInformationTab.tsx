"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabItems } from "@/constants";

const MerchantsInformationTab = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex-none grow-0 justify-items-center overflow-y-auto text-nowrap rounded bg-gray-200 p-2">
        {tabItems.map((item) => {
          const isActive =
            (pathname?.includes(item.route) && item.title.length > 1) ||
            pathname === item.title;

          return (
            <Link
              href={item.route}
              className={`${isActive ? "bg-zinc-700 text-white" : "bg-gray-300 text-black"} bg-gray-300 text-black`}
              key={item.title}
            >
              <div
                className={`${isActive ? "bg-zinc-700 text-white" : "font-semibold text-black"} mb-2 flex-none rounded p-2 text-center hover:bg-gray-300`}
              >
                <p className="">{item.title}</p>
                <p className="hidden">{item.title.charAt(0)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MerchantsInformationTab;

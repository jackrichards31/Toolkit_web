"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabItems } from "@/constants";
import Image from "next/image";

const MerchantsInformationTab = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-min flex-none grow-0 justify-items-center text-nowrap rounded bg-gray-200 p-2 dark:bg-zinc-700">
        {tabItems.map((item) => {
          const isActive =
            (pathname?.includes(item.route) && item.title.length > 1) ||
            pathname === item.title;

          return (
            <Link
              href={item.route}
              title={item.title}
              className={`${isActive ? "bg-zinc-700 text-white" : "bg-gray-300 text-black"}`}
              key={item.title}
            >
              <div
                className={`${
                  isActive
                    ? "bg-zinc-700 text-white dark:bg-gray-300 dark:text-black"
                    : "font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-800"
                } mb-3 flex-none rounded p-2 text-center`}
              >
                <p className="max-xl:hidden">{item.title}</p>
                {/* <p className='hidden max-xl:block '>{item.title.charAt(0)}</p> */}
                <Image
                  className="hidden max-xl:block"
                  src={item.icon}
                  alt="Logo"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MerchantsInformationTab;

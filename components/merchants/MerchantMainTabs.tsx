import React from "react";
import Link from "next/link";
import { merchantMainTabs as tabs } from "@/constants";
import { usePathname } from "next/navigation";

const MerchantMainTabs = () => {
  const pathname = usePathname();

  return (
    <div className="mb-0 box-content inline-flex gap-2 rounded-t-lg border border-b-0 border-solid border-gray-600 px-5">
      {tabs.map((item) => {
        const isActive =
          (pathname?.includes(item.value) && item.title.length > 1) ||
          pathname === item.title;

        return (
          <div
            className={`${isActive ? "border-b-8 border-sky-500 text-sky-500" : "text-black dark:text-white"} cursor-pointer p-3 text-lg`}
            key={item.value}
          >
            <Link href={item.route}>
              <p className="text-pretty">{item.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MerchantMainTabs;

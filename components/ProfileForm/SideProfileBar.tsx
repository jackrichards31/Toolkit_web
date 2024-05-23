"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { profileLinks } from "@/constants";
import ProfileFooter from "./ProfileFooter";

const SideProfileBar = () => {
  const pathname = usePathname();

  return (
    <aside className="-mx-4 lg:w-1/5">
      <nav className="flex items-start gap-4 space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
        {profileLinks.map((item) => {
          const isActive =
            (pathname.includes(item.title) && item.title.length > 1) ||
            pathname === item.title;
          return (
            <Link
              key={item.title}
              href="/"
              className={`${isActive ? "bg-gray-200 dark:bg-zinc-400" : "hover:underline"} w-full rounded-md p-3 font-semibold`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      <ProfileFooter />
    </aside>
  );
};

export default SideProfileBar;

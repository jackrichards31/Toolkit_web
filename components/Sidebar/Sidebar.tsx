"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import ProfileLogo from "../Profile/ProfileLogo";

const Sidebar = () => {
  const pathname = usePathname();
  const Firstname = "Tony";
  const Lastname = "Stark";

  return (
    <section className="sticky left-0 top-0 flex h-screen w-64 flex-col justify-between overflow-y-auto border-r p-6 pt-16 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <Link href="/">
            <Image
              src="/icon/LogoBlack.webp"
              alt="logo"
              width={250}
              height={250}
              priority
            />
          </Link>
        </div>

        <hr className="text-[14px]" />

        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              className={`${isActive ? "primary-gradient text-light-900 rounded-lg" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
              key={item.label}
              href={item.route}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <ProfileLogo Firstname={Firstname} Lastname={Lastname} />
    </section>
  );
};

export default Sidebar;

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import ProfileLogo from "../Profile/ProfileLogo";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const pathname = usePathname();
  const light = "/icon/LogoWhite.png";
  const dark = "/icon/LogoBlack.webp";
  const Firstname = "Tony";
  const Lastname = "Stark";
  const { theme } = useTheme();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-64 flex-col justify-between overflow-y-auto border-r p-6 pt-16 dark:shadow-none max-md:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <Link href="/">
            <Image
              src={theme === "dark" ? light : dark}
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
              className={`${isActive ? "rounded-lg" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
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

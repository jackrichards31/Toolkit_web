"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import ProfileLogo from "../Profile/ProfileLogo";
import MobileSideNav from "./MobileNav";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const pathname = usePathname();
  const light = "/icon/LogoWhite.png";
  const dark = "/icon/LogoBlack.webp";
  const Firstname = "Tony";
  const Lastname = "Stark";
  const { theme, systemTheme } = useTheme();

  // Set the theme for system, dark, and light
  // eslint-disable-next-line no-unused-vars
  const [resolvedTheme, setResolvedTheme] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme, systemTheme]);

  const imgSrc =
    theme === "system"
      ? systemTheme === "dark"
        ? light
        : dark
      : theme === "light"
        ? dark
        : light;

  return (
    <>
      <section className="sticky left-0 top-0 flex h-screen w-64 flex-col justify-between overflow-y-auto border-r p-6 pt-16 dark:shadow-none max-md:hidden lg:w-[266px]">
        <div className="flex flex-1 flex-col gap-6">
          <div>
            <Link href="/">
              <Image
                src={imgSrc}
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
              (pathname?.includes(item.route) && item.label.length > 1) ||
              pathname === item.label;
            return (
              <Link
                className={`${isActive ? "bg-slate-300 shadow-md dark:bg-zinc-800" : ""} flex items-center justify-start gap-4 rounded-lg bg-transparent p-4`}
                key={item.label}
                href={item.route}
              >
                {React.createElement(item.icon)}
                <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>

        <ProfileLogo Firstname={Firstname} Lastname={Lastname} />
      </section>

      <MobileSideNav />
    </>
  );
};

export default Sidebar;

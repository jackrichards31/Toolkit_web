"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "../Footer/Footer";

const MobileNav = ({ user }: { user: string }) => {
  const pathname = usePathname();
  return (
    <section className="hidden w-full max-w-[254px] max-sm:absolute max-sm:top-10">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icon/hamburger.svg"
            alt="Hamburger"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="flex items-center gap-1 px-4">
            <Image
              src="/icon/Chain-smol.png"
              alt="Logo"
              width={34}
              height={34}
            />
            <h1 className="text-[26px] font-bold text-zinc-900">
              Micamp Solutions
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname.includes(item.route) ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-orange-400": isActive,
                        })}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn(
                            "text-[16px] font-semibold text-zinc-900",
                            { "text-white": isActive }
                          )}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>

            <Footer />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

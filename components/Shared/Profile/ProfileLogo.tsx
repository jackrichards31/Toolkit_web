"use client";

import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { profileLinks } from "@/constants";

const ProfileLogo = ({
  Firstname,
  Lastname,
}: {
  Firstname: string;
  Lastname: string;
}) => {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-md border p-2 shadow-md">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex w-full outline-none">
          <Avatar>
            <AvatarFallback>{Firstname[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-3 flex flex-col items-start max-2xl:hidden max-sm:flex">
            <h1 className="text-dark200_light900 font-semibold">
              {Firstname} {Lastname}
            </h1>
            <p className="text-dark200_light900 text-[12px]">
              Head of an IT department
            </p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {profileLinks.map((item) => (
            <DropdownMenuItem key={item.title}>
              {item.title === "Logout" ? (
                <span className="cursor-pointer">{item.title}</span>
              ) : (
                <Link href={item.url} className="w-full">
                  {item.title}
                </Link>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileLogo;

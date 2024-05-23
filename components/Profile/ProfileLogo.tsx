"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { User, Settings, LogOut } from "lucide-react";

const ProfileLogo = ({
  Firstname,
  Lastname,
}: {
  Firstname: string;
  Lastname: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-md border p-2 shadow-md">
      <button className="flex w-full" onClick={() => setIsOpen(!isOpen)}>
        <Avatar>
          <AvatarFallback className="font-bold">{Firstname[0]}</AvatarFallback>
        </Avatar>
        <div className="ml-3 flex flex-col items-start max-sm:hidden">
          <h1 className="text-dark200_light900 font-semibold">
            {Firstname} {Lastname}
          </h1>
          <p className="text-dark200_light900 text-[12px]">
            Head of an IT department
          </p>
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-12 left-0 z-10 w-48 rounded-lg bg-white shadow-lg"
        >
          <ul className="py-2">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100">
              <User className="mr-2" />
              <Link href="/profile">My Profile</Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100">
              <Settings className="mr-2" />
              <Link href="/profile/appearance">Settings</Link>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100">
              <LogOut className="mr-2" />
              <Link href="/">Logout</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileLogo;

// import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const ProfileLogo = ({
  Firstname,
  Lastname,
}: {
  Firstname: string;
  Lastname: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/profile">
        <Avatar className="footer_name">
          <AvatarFallback className="font-bold">{Firstname[0]}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-col">
        <h1 className="text-dark200_light900 font-semibold">
          {Firstname} {Lastname}
        </h1>
        <p className="text-dark200_light900 text-[12px]">
          Head of an IT department
        </p>
      </div>
    </div>
  );
};

export default ProfileLogo;

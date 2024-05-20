import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ProfileLogo = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Avatar className="background-light900_dark200 text-dark200_light900">
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
      {/* <Link href="/sign-in">
        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
          <Image
            src="/icon/account.svg"
            alt="login profile"
            width={20}
            height={20}
            className="invert-colors lg:hidden"
          />

          <span className="text-dark100_light900 max-lg:hidden">Sign in</span>
        </Button>
      </Link> */}
    </div>
  );
};

export default ProfileLogo;

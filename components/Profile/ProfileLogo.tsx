import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ProfileLogo = () => {
  return (
    <div className="flex flex-col gap-3">
      <Link href="/sign-in">
        <Button className="small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
          <Image
            src="/icon/account.svg"
            alt="login profile"
            width={20}
            height={20}
            className="invert-colors lg:hidden"
          />

          <span className="max-lg:hidden">Sign in</span>
        </Button>
      </Link>
    </div>
  );
};

export default ProfileLogo;

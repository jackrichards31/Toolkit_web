import React from "react";
import Link from "next/link";
import Image from "next/image";

const Auth = ({ type }: { type: string }) => {
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image
            src="/icon/LogoBlack.webp"
            alt="logo"
            width={250}
            height={250}
            priority
          />
          <h1 className="font-spaceGrotesk text-[26px] font-bold text-cyan-950">
            MiCamp Solutions
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1></h1>
        </div>
      </header>
    </section>
  );
};

export default Auth;

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="fixed bottom-0 flex h-fit w-full flex-1 flex-row items-center border-t-2 max-sm:backdrop-blur-sm">
        <div className="flex w-1/3 justify-center">
          <Image
            src="/icon/Chain-smol.png"
            alt="Logo"
            width={34}
            height={34}
            priority
            className="my-5"
          />
        </div>
        <h1>Copy right of Micamp Solutions LLC @2024</h1>
      </div>
    </footer>
  );
};

export default Footer;

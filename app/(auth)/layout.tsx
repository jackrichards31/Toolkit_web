import Image from "next/image";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex min-h-screen w-full justify-between">
      {children}
      <div>
        <div className="auth-asset">
          <Image
            src="/icon/Chain-smol.png"
            alt="Logo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
};

export default layout;

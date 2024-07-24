import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NewMerchant from "./NewMerchant";
import { useTheme } from "next-themes";
// import Theme from "../Home/Theme";


const MerchantShortcuts = () => {

  const dark = "/icon/new-merchant.svg";
  const light = "/icon/new-merchant-blue.svg";
  const { theme, systemTheme } = useTheme();

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
    <section className="w-auto">
      <h1 className="mb-4 text-center text-sky-500 text-3xl">
        Shortcuts
      </h1>
      <div className="flex flex-wrap w-auto justify-center gap-4 rounded-md text-lg text-sky-500">

        {/* MERCHANT ICON */}
        <div className="flex flex-1 flex-col justify-center rounded-md border border-gray-600 bg-transparent px-2">
          <div className="flex justify-center">
            <h1>Merchant</h1>
          </div>
          <Dialog>
            <DialogTrigger>
              <div className="my-4 flex justify-center">
                <Image
                  src={imgSrc}
                  alt="Logo"
                  width={75}
                  height={75}
                  priority
                />
              </div>
              <div className="flex justify-center">
                <h1 className="text-black dark:text-white">
                  Create New Merchant
                </h1>
              </div>
            </DialogTrigger>
            <DialogContent className="2xl:[1200px] max-lg:max-w-[500px] lg:max-w-[800px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold">
                  Merchant Information
                </DialogTitle>
                <NewMerchant />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>


        <div className="justify-center flex-1 text-center p-5 rounded-md border border-gray-600 bg-transparent">
          <h1>
            Tasks / Logs
          </h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/create-task.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            <h1 className="text-nowrap justify-center text-black dark:text-white">
              Create Task
            </h1>
          </div>
        </div>
        <div className="justify-center flex-1 text-center p-5 rounded-md border border-gray-600 bg-transparent">
          <h1>
            Documents
          </h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/upload-document.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            <h1 className="text-nowrap justify-center text-black dark:text-white">
              Upload Document
            </h1>
          </div>
        </div>

        <div className="justify-center flex-1 text-center p-5 rounded-md border border-gray-600 bg-transparent">
          <h1>Equipment</h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/equipment-create-order.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            <h1 className="text-nowrap justify-center text-black dark:text-white">
              Create Order
            </h1>
          </div>
        </div>

        <div className="justify-center flex-1 text-center p-5 rounded-md border border-gray-600 bg-transparent">
          <h1>Call Logs</h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/call-logs.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            <h1 className="text-nowrap justify-center text-black dark:text-white">
              See Logs / Tasks
            </h1>
          </div>
        </div>

        <div className="justify-center flex-1 text-center p-5 rounded-md border border-gray-600 bg-transparent">
          <h1>Leasing</h1>
          <div className="">
            <Image
              className="m-auto my-5"
              src="/icon/leasing-create-order.svg"
              alt="Logo"
              width={75}
              height={75}
              priority
            />
            <h1 className="text-nowrap justify-center text-black dark:text-white">
              Create Order
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MerchantShortcuts;
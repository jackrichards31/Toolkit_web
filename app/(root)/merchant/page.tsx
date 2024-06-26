import React from "react";
import { Payment, columns } from "./columns";
import DataTable from "./data-table";
import MobileTable from "@/components/Shared/DataTable/MobileTable";

async function payment(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
  ];
}

const Merchants = async () => {
  const data = await payment();
  return (
    <>
      <section className="flex min-h-fit w-full justify-center p-12 max-sm:hidden">
        <DataTable columns={columns} data={data} />
      </section>

      <section className="flex min-h-fit w-full justify-center sm:hidden">
        <MobileTable />
      </section>
    </>
  );
};

export default Merchants;

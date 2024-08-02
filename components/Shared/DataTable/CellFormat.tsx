import React from "react";

export const Price = (row: any) => {
  const amount = parseFloat(row.getValue("price"));
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return <div className="text-start font-medium">{formatted}</div>;
};

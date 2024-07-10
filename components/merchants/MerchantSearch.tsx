import React from "react";
import { Input } from "../ui/input";

const MerchantSearch = () => {
  return (
    <div className="mt-3 flex">
      <div className="flex flex-col">
        <Input placeholder="Search MID, DBA, Legal Name, Phone, Address, Contact, or Email" />
      </div>
    </div>
  );
};

export default MerchantSearch;

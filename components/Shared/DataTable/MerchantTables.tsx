import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MerchantTabs from "@/components/merchants/MerchantTabs";

const MerchantTables = () => {
  return (
    <div className="px-12">
      <Card>
        <CardHeader>
          <CardTitle>Merchants</CardTitle>
          <div className="mt-3 flex flex-row">
            <div>
              <span className="text-lg">Information</span>
              <div
                data-orientattion="horizontal"
                className="mt-3 w-full border-b"
              />
              <MerchantTabs />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MerchantTables;

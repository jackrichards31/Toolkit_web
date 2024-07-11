"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency, formatDate, formatRelativeDate } from "@/lib/utils";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export default function MerchantDetails() {
  const currentDate = formatDate(new Date());

  return (
    <Card className="w-3/4 overflow-hidden max-sm:hidden sm:hidden 2xl:block">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Merchant Details
          </CardTitle>
          <CardDescription>Date: {currentDate}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Merchant Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">MID</span>
              <span className="w-full">
                <Input placeholder="1234567890" disabled />
              </span>
            </li>
            <li className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">Name</span>
              <span className="w-full">
                <Input placeholder="Average Joe" disabled />
              </span>
            </li>
            <li className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">DBA</span>
              <span className="w-full">
                <Input placeholder="DBA of the merchant" disabled />
              </span>
            </li>
            <li className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">Phone number</span>
              <span className="w-full">
                <Input placeholder="+1-480-000-0000" disabled />
              </span>
            </li>
            <li className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">Status</span>
              <Badge variant="destructive" className="text-start">
                Denied
              </Badge>
            </li>
            <li className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">Approval Date</span>
              <span className="w-full">
                <Input
                  placeholder={
                    formatDate(new Date()) +
                    ` (${formatRelativeDate(new Date())})`
                  }
                  disabled
                />
              </span>
            </li>
            <li className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">Processor</span>
              <span className="w-full">
                <Input placeholder="Intel i3 12400K" disabled />
              </span>
            </li>
            <li className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground">Sales Rep</span>
              <span className="w-full">
                <Input placeholder="Micamp Solutions" disabled />
              </span>
            </li>
          </ul>
          <Separator className="my-2" />
          <div className="w-full">
            <ul className="grid grid-cols-2 gap-3">
              <li className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Est Annual Volumn</span>
                <span className="w-full">
                  <Input placeholder={formatCurrency(25000)} disabled />
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Transactions</span>
                <span className="w-full">
                  <Input placeholder="10000" disabled />
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Type</span>
                <span className="w-full">
                  <Input placeholder="Restaurant" disabled />
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Deployed</span>
                <span className="w-full">
                  <Input placeholder="Micamp Solutions" disabled />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center justify-between border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated {formatRelativeDate(new Date())}
        </div>

        <Button type="button" onClick={() => {}}>
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}

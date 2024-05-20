"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sidebarLinks } from "@/constants";

const Cards = () => {
  return (
    <div className="mt-10 flex max-h-fit max-w-full flex-1 justify-around">
      {sidebarLinks.map((item) => {
        return (
          <Card
            key={item.label}
            className="background-light900_lightDark200 text-dark200_light900 flex h-80 w-64 flex-col items-center rounded-lg bg-slate-50 shadow-lg"
          >
            <CardHeader className="text-center">
              <CardTitle>{item.label}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
              <hr />
            </CardHeader>
            <CardContent className="flex h-screen flex-auto flex-col">
              <p></p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;

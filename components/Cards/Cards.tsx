"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { sidebarLinks } from "@/constants";
import Link from "next/link";

const Cards = () => {
  return (
    <div className="mt-10 flex max-h-fit max-w-full flex-1 justify-around">
      {sidebarLinks.map((item, index) => {
        return (
          <Card
            key={index}
            className="background-light900_dark200 text-dark200_light900 flex h-80 w-64 flex-col items-center rounded-lg bg-slate-50 shadow-lg"
          >
            <CardHeader className="text-center">
              <CardTitle>{item.label}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
              <hr />
            </CardHeader>
            {item.options.map((option, optionIndex) => (
              <CardContent
                key={optionIndex}
                className="flex h-screen w-full flex-auto flex-col"
              >
                <Button className="bg-zinc-950 text-white dark:bg-slate-50 dark:text-black">
                  <Link href={item.route}>{option}</Link>
                </Button>
              </CardContent>
            ))}
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;

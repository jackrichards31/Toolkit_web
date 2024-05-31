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
    <div className="mt-10 flex max-h-fit max-w-full flex-1 flex-wrap justify-around max-sm:mb-10">
      {sidebarLinks.map((item, index) => {
        return (
          <Card
            key={index}
            className="bg-light_dark flex h-80 w-64 flex-col items-center rounded-lg shadow-lg max-lg:mt-8"
          >
            <CardHeader className="text-center">
              <CardTitle className="text-dark_light">{item.label}</CardTitle>
              <CardDescription className="text-dark_light">
                {item.desc}
              </CardDescription>
              <hr />
            </CardHeader>
            {item.options.map((option, optionIndex) => (
              <CardContent
                key={optionIndex}
                className="flex h-screen w-full flex-auto flex-col"
              >
                <Button variant="default" className="btn-dark_light">
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

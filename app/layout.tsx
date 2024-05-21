import React from "react";
import type { Metadata } from "next";
import { Inter as Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Toolkit",
  description: "A Toolkit web for everyone",
  icons: {
    icon: "/public/icon/Chain-smol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} background-light900_dark200`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import React from "react";
import type { Metadata } from "next";
import { Inter as Sans } from "next/font/google";
import "./globals.css";
// import "devextreme/dist/css/dx.fluent.blue.dark.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { DevLicense } from "@/components/DevLicense";

const inter = Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Toolkit",
  description: "A Toolkit web for everyone",
  icons: {
    icon: "/icon/Chain-smol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} text-dark_light dark:bg-zinc-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DevLicense />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

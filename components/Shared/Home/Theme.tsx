"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../../ui/button";
import { Switch } from "@/components/ui/switch";

const ThemeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Detect system theme and set initial theme.
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [theme, systemTheme]);

  const toggleTheme = () => {
    console.log("clicked!");
    if (isDarkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="mt-5 flex items-center justify-center space-x-4 sm:hidden">
      <Sun
        className={
          isDarkMode === false
            ? "text-orange-500 opacity-100 transition-colors duration-1000"
            : "opacity-50 transition-opacity duration-1000"
        }
      />
      <Switch checked={isDarkMode} onClick={toggleTheme} />
      <Moon
        className={
          isDarkMode === false
            ? "opacity-50 transition-opacity duration-1000"
            : "text-indigo-500 opacity-100 transition-colors duration-1000"
        }
      />
    </div>
  );
};

const Theme = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div className="max-sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ThemeSwitcher />
    </>
  );
};

export default Theme;

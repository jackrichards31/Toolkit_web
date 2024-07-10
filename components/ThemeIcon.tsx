"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeIcon = () => {
  const light = "/icon/LogoWhite.png";
  const dark = "/icon/LogoBlack.webp";
  const { theme, systemTheme } = useTheme();

  // Set the theme for system, dark, and light
  const [resolvedTheme, setResolvedTheme] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme, systemTheme]);

  const getImgSrc = () => {
    if (resolvedTheme === undefined) {
      // Return default image source matching SSR
      return light;
    }
    return resolvedTheme === "dark" ? light : dark;
  };

  const imgSrc = getImgSrc();
  return imgSrc;
};

export default ThemeIcon;

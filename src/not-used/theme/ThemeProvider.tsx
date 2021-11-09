import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider as WipsieThemeProvider, CssBaseline } from "@wipsie/ui";

import { setCookie, parseCookies, destroyCookie } from "nookies";

export const ThemeContext = createContext<any>({});

type ThemeVariants = "light" | "dark" | "cosmic";

export default function ThemeProvider({ defaultTheme, children }: any) {
  const [theme, setTheme] = useState<ThemeVariants>(defaultTheme || "light");

  // reading effect
  useEffect(() => {
    (async () => {
      let currentTheme: ThemeVariants = (await parseCookies()
        ._theme) as ThemeVariants;

      console.log("====================================");
      console.log("current theme: ", currentTheme);
      console.log("====================================");

      if (currentTheme === undefined || currentTheme === null) {
        currentTheme = theme;
        await setCookie(null, "_theme", currentTheme, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
      }

      setTheme(currentTheme);
    })();
  }, [theme]);

  // theme change
  async function handleThemeChange(theme: ThemeVariants) {
    await setCookie(null, "_theme", theme, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ handleThemeChange, currentTheme: theme }}>
      <WipsieThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </WipsieThemeProvider>
    </ThemeContext.Provider>
  );
}

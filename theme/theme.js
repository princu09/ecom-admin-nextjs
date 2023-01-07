import { createContext, useState, useMemo } from "react";

import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode == "dark"
    ? {
        primary: {
          100: "#e7d0d7",
          200: "#cfa1af",
          300: "#b87187",
          400: "#a0425f",
          500: "#881337",
          600: "#6d0f2c",
          700: "#520b21",
          800: "#360816",
          900: "#1b040b",
        },
        secondary: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
      }
    : {
        primary: {
          100: "#1b040b",
          200: "#360816",
          300: "#520b21",
          400: "#6d0f2c",
          500: "#881337",
          600: "#a0425f",
          700: "#b87187",
          800: "#cfa1af",
          900: "#e7d0d7",
        },
        secondary: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },
      }),
});

export const themeSetting = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.secondary[500],
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);

  return [theme, colorMode];
};

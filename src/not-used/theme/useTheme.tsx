import { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";

export default function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

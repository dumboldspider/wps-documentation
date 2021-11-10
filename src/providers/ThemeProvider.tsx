import dynamic from "next/dynamic";
const TopProgressBar = dynamic(() => import("../components/TopProgressBar"));
import {
  ThemeProvider as WipsieThemeProvider,
  CssBaseline,
  NprogressBaseline,
} from "@wipsie/ui";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state: any) => state.settings);

  return (
    <WipsieThemeProvider theme={theme || "light"}>
      <CssBaseline />
      <NprogressBaseline type="bar" height="3px" />
      <TopProgressBar />
      {children}
    </WipsieThemeProvider>
  );
};

export default ThemeProvider;

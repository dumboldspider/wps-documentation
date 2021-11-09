import "../styles/global.css";
// import ThemeProvider from "../hooks/theme/ThemeProvider";
// import useLocalTheme from "../hooks/theme/useTheme";
import { ThemeProvider as WipsieThemeProvider, CssBaseline } from "@wipsie/ui";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("_theme", "light");

  return (
    <WipsieThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        {...pageProps}
      />
    </WipsieThemeProvider>
  );
};

export default MyApp;

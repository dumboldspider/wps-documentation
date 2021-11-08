import "../styles/global.css";
import { CssBaseline, ThemeProvider } from "@wipsie/ui";
import useLocalStorage from "../hooks/useLocalStorage";

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useLocalStorage<string>(
    "_theme",
    "light"
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        {...pageProps}
      />
    </ThemeProvider>
  );
}

export default MyApp;

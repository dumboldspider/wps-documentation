import "../styles/global.css";
import ThemeProvider from "../hooks/theme/ThemeProvider";
import { parseCookies } from "nookies";

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  const cookies = parseCookies();
  const defaultTheme = cookies._theme;

  if (!defaultTheme) {
    return null;
  }

  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

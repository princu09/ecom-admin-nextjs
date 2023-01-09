import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ColorModeContext, useMode } from "../theme/theme";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps, router }) {
  const [theme, colorMode] = useMode();

  if (router.pathname.startsWith("/admin")) {
    return (
      <Provider store={store}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="px-5 min-h-screen">
              <Navbar />
              <div className="flex gap-5 relative min-h-screen">
                <Sidebar />
                <div className={`mainBG p-5 rounded-lg w-full -ml-[20px]`}>
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Provider>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

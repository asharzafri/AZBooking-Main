import "../global.css";
import Layout from "../components/layout";
import { NextUIProvider } from "@nextui-org/react";
import { DataContextProvider } from "../store/data-store";
import { useEffect } from "react";
import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;

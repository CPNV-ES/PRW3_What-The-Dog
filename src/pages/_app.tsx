import { ReactNode } from "react";
import { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";

import "../styles/globals.css";
import { Header } from "../ui/Header";
import { muiTheme } from "../lib/mui-theme";

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2f2f2f" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>What the dog</title>
      </Head>
      <Header />
      <ThemeProvider theme={muiTheme}>
        {getLayout(<Component {...pageProps}></Component>)}
      </ThemeProvider>
    </>
  );
};

export default App;

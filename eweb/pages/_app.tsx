import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import type { AppProps } from "next/app";

import GlobalStyle from "../styles/global-styles";
import React from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../core/fetcher";
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import { KeepAliveProvider } from "react-next-keep-alive";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";

export const GlobalContext = React.createContext<{}>({});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <SWRConfig
        value={{
          errorRetryInterval: 3000,
          errorRetryCount: 3,
          fetcher,
        }}
      >
        <KeepAliveProvider router={router}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </KeepAliveProvider>
      </SWRConfig>
    </>
  );
};

export default observer(App);

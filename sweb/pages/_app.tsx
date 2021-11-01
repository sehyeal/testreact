import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import type { AppProps /*, AppContext*/ } from "next/app";

import GlobalStyle from "../styles/global-styles";

import React from "react";

import { useRouter } from "next/router";
import { observer } from "mobx-react";
import { KeepAliveProvider } from "react-next-keep-alive";
import "../styles/globals.css";
import "../styles/swiper.css";

export const IsMobileContext = React.createContext<boolean>(false);

export const GlobalContext = React.createContext<{
  isMobile: boolean;
  isDevel: boolean;
  appconfs?: any;
  isAndroid: boolean;
  isIOS: boolean;
}>({
  isMobile: false,
  isDevel: false,
  appconfs: {},
  isAndroid: false,
  isIOS: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  GlobalStyle();
  const router = useRouter();
  router.asPath.includes("/stitches/");
  console.log(pageProps);

  return (
    <>
      <KeepAliveProvider router={router}>
        <Component {...pageProps} />
      </KeepAliveProvider>
    </>
  );
};

export default observer(App);

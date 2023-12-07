// @ts-nocheck
// ----------------------------------------------------------------------
import { EmotionCache } from "@emotion/react";
// utils
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// eslint-disable-next-line import/no-extraneous-dependencies
// next
import { NextPage } from "next";
import { Session } from "next-auth";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
// load react circular progress
import "react-circular-progressbar/dist/styles.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";

// scroll bar
import "simplebar/src/simplebar.css";
import "slick-carousel/slick/slick-theme.css";
// slick-carousel
import "slick-carousel/slick/slick.css";
import { pageview } from "src/lib/gtm";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// lightbox
import "yet-another-react-lightbox/styles.css";

// components
// locales
// i18n
// custom css
import "../styles/theme.scss";
// theme

// Check our docs
// https://docs.minimals.cc/authentication/ts-version

// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  // session: Session;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();

  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  // @ts-ignore
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </>
  );
}

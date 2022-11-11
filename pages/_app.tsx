import type { AppProps } from "next/app";

import React from "react";
import Head from "next/head";

import "@/styles/globals.scss";
import "@/styles/reset.css";

import AppLayout from "@/components/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Mobile Template For Paycrux" />
        <title>Mobile Template</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

import clsx from "clsx";
import "@ulld/tailwind/websiteStyles.scss";
import "#/styles/globals.scss";
import "#/styles/mdx.scss";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";
import { StateWrappedUI } from "@ulld/state/wrappers/stateWrappedUI";
import { Toaster } from "@ulld/tailwind/toaster";
import { fontSans } from "@ulld/tailwind/defaultFont";
/* import appConfig from "#/appConfig.ulld.json"; */
import localFont from "next/font/local";
import SetInitialRender from "#/components/utility/setInitialRender";
import StateWrappedComponents from "#/components/utility/providers/stateWrappedComponents";
import store from "#/state/store";
/* import "shiki/themes/dracula.mjs" */

const appFont = localFont({
  variable: "--ulld-app-font",
  src: [
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/appFont/DM_Sans/static/DMSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uh Little Less Dum",
  description: "The world has enough stupid people.",
};

const RootLayout = async (props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  /* const config = getInternalConfig(appConfig as any as AppConfigSchemaOutput); */

  const cookieJar = cookies();

  /* let settings = settingSchema.parse(s) */
  const settings = { tooltips: true };

  const preferFs = cookieJar.has("preferFs");

  let p = {
    "data-theme": "dark",
    "data-color-mode": "dark",
    "data-ulld-theme": "ulld",
    "data-js-focus-visible": "",
  };

  /* TODO: Add .noTooltips class to html element according to settings. Create function to toggle class when toggling setting. */

  return (
    <html
      lang="en"
      className={clsx(
        "group/html js-focus-visible dark border-border",
        appFont.variable,
      )}
      {...p}
    >
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#0ba5e9"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#333333" />
      </head>
      <body
        className={clsx(
          "group/body",
          fontSans.variable,
          preferFs && "preferFs",
        )}
        id={`Ulld-body-root`}
      >
        {props.children}
        <Toaster />
        {props.modal && props.modal}
        <SetInitialRender />
        <StateWrappedUI store={store} />
        <StateWrappedComponents />
      </body>
    </html>
  );
};

export default RootLayout;

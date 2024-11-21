import React from "react";
import "@ulld/tailwind/defaultStyles.scss";
import "#/styles/index.scss";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { StateWrappedUI } from "@ulld/state/wrappers/stateWrappedUI";
import { Toaster } from "@ulld/tailwind/toaster";
import axios from "axios";
import appConfig from "appConfig";
import { prisma } from "@ulld/database";
import { settingSchema } from "@ulld/parsers/settings/settingsParser";
import Navbar from "#/components/slots/navigation/navbar";
import SecondaryNav from "#/components/slots/navigation/secondaryNavigation";
import DefaultCommandPalette from "#/components/slots/commandPalette/main";
import DefaultConfirmationModal from "#/components/slots/ui/confirmationModal";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import BibEntryDetailSheetTemplate from "#/components/slots/bibliography/bibEntryDetailsSheet";
import localFont from "next/font/local";
import { seedTargetAppIfNotExists } from "@ulld/api/seedIfNotExists";
import { getBodyClassesFromAppConfig } from "@ulld/utilities/getBodyClasses";
import FooterComponentTemplate from "../components/slots/navigation/footer";

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
  title: (appConfig as AppConfigSchemaOutput).meta.title,
  description: (appConfig as AppConfigSchemaOutput).meta.desc,
};

export const viewport: Viewport = {
  themeColor: "#333",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const RootLayout = async (props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  await seedTargetAppIfNotExists(appConfig as AppConfigSchemaOutput);
  const cookieJar = cookies();
  const darkMode = cookieJar.has("darkMode");
  const _settings = await prisma.settings.findFirst({
    where: {
      id: 1,
    },
  });
  let colorThemeCookie = cookieJar.get("ulld-theme");
  if (!colorThemeCookie?.value) {
    colorThemeCookie = { name: "ulld-theme", value: "ulld" };
  }

  let settings = settingSchema.parse(_settings || {});
  let plotTheme = _settings?.plotTheme ? `-${_settings.plotTheme}` : "";

  let plotThemeCookie = cookieJar.get("ulld-plot-theme");
  if (plotThemeCookie !== settings.plotTheme) {
    await axios.post("/api/settings/handlePlotTheme", {
      theme: settings.plotTheme,
    });
  }

  const preferFs = cookieJar.has("preferFs");
  let colorMode = darkMode ? "dark" : "light";

  let p: Record<string, string> = {
    "data-theme": colorMode,
    "data-color-mode": colorMode,
    "data-ulld-theme": colorThemeCookie.value,
    "data-js-focus-visible": "",
  };

  return (
    <html
      lang="en"
      className={clsx(
        "group/html overflow-x-hidden max-w-screen min-h-screen js-focus-visible border-border min-scrollbar bg-background",
        darkMode && "dark",
        `plot-theme${plotTheme}`,
        Boolean(settings && settings.tooltips === false) && "noTooltips",
        appFont.variable,
      )}
      data-js-focus-visible=""
      {...p}
    >
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body
        className={clsx(
          "group/body @container/body bg-background min-scrollbar border-border max-w-full overflow-x-hidden inline",
          /* fontSans.variable, */
          darkMode && "dark",
          preferFs && "preferFs",
          getBodyClassesFromAppConfig(appConfig as AppConfigSchemaOutput),
        )}
        id={`Ulld-body-root`}
      >
          <Navbar
            noteTypes={
              appConfig.noteTypes as AppConfigSchemaOutput["noteTypes"]
            }
            navConfig={
              appConfig.navigation as AppConfigSchemaOutput["navigation"]
            }
          />
          <SecondaryNav
            noteTypes={
              appConfig.noteTypes as AppConfigSchemaOutput["noteTypes"]
            }
            navConfig={
              appConfig.navigation as AppConfigSchemaOutput["navigation"]
            }
          />
          <StateWrappedUI settings={settings} config={appConfig as any}>
            <DefaultCommandPalette />
            <DefaultConfirmationModal appConfig={appConfig as any} />
            <BibEntryDetailSheetTemplate />
            {props.children}
          </StateWrappedUI>
          <Toaster />
          {props.modal && props.modal}
            <FooterComponentTemplate />
      </body>
    </html>
  );
};

export default RootLayout;

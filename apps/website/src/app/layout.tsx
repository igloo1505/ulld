import clsx from "clsx";
import "@ulld/tailwind/websiteStyles.scss";
import "#/styles/globals.scss";
import "#/styles/mdx.scss";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import React from "react";
/* import { RequireJsLoader } from "@ulld/utilities/loaders" */
import { StateWrappedUI } from "@ulld/state/wrappers/stateWrappedUI";
import { Toaster } from "@ulld/tailwind/toaster";
import { fontSans } from "@ulld/tailwind/defaultFont";
import appConfig from "#/appConfig.ulld.json";
import localFont from "next/font/local";
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
    /* await writeConfigJson(lazyTestConfig, "/Users/bigsexy/Desktop/currentProjects/ulld/apps/sandbox") */
    const config = getInternalConfig(appConfig as any as AppConfigSchemaOutput);
    /* logger.debug(JSON.stringify(config, null, 4), { label: "Config" }) */

    const cookieJar = cookies();
    /* const darkMode = cookieJar.has("darkMode") */
    const darkMode = true;
    /* const s = await prisma.settings.findFirst({ */
    /*     where: { */
    /*         id: 1 */
    /*     } */
    /* }) */

    /* let settings = settingSchema.parse(s) */
    const settings = { tooltips: true };

    const preferFs = cookieJar.has("preferFs");
    let colorMode = darkMode ? "dark" : "light";

    let p = {
        "data-theme": colorMode,
        "data-color-mode": colorMode,
        "data-ulld-theme": "violet",
        "data-js-focus-visible": "",
    };

    /* TODO: Add .noTooltips class to html element according to settings. Create function to toggle class when toggling setting. */

    return (
        <html
            lang="en"
            className={clsx("group/html js-focus-visible dark", appFont.variable)}
            {...p}
        >
            <head>
                <link rel="icon" href="/icons/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
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
            </body>
        </html>
    );
};

export default RootLayout;

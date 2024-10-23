import "@ulld/tailwind/defaultStyles.scss";
import "../styles/globals.scss";
import React, { type ReactNode } from "react";
import { fontSans } from "@ulld/tailwind/defaultFont";
import localFont from "next/font/local";
import clsx from "@ulld/utilities/cn";
import { cookies } from "next/headers";
import { Toaster } from "@ulld/tailwind/toaster";
import { DynamicIcon } from "@ulld/icons";
import type { PassedLogoProps } from "@ulld/types";
import { readDevelopmentAppConfig } from "@ulld/utilities/devUtils";
import Footer from "../components/footer/ssr";
import SecondaryNav from "../components/sidebar/sidebarSSR";
import Navbar from "../components/navbar/navbarSSR";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";

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

const DemoLogo = (props: PassedLogoProps): ReactNode => {
    return <DynamicIcon {...props} name="ulld" />;
};

const RootLayout = (props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}): ReactNode => {
    const cookieJar = cookies();
    const appConfig = readDevelopmentAppConfig(__dirname);

    if (!appConfig) {
        throw new Error(
            `Cannot find a valid appConfig.ulld.json file. Cannot reliably run the ULLD app.`,
        );
    }

    const preferFs = cookieJar.has("preferFs");

    const p = {
        "data-theme": "dark",
        "data-color-mode": "dark",
        "data-ulld-theme": "ulld",
        "data-js-focus-visible": "",
    };

    /* TODO: Add .noTooltips class to html element according to settings. Create function to toggle class when toggling setting. */

    return (
        <html
            className={clsx(
                "group/html overflow-x-hidden max-w-screen js-focus-visible dark border-border min-scrollbar bg-background",
                appFont.variable,
            )}
            lang="en"
            {...p}
        >
            <head>
                <link href="/icons/favicon.ico" rel="icon" sizes="any" />
                <link
                    href="/icons/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    href="/icons/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/icons/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                <link href="/manifest.json" rel="manifest" />
                <link
                    color="#0ba5e9"
                    href="/icons/safari-pinned-tab.svg"
                    rel="mask-icon"
                />
                <link href="/icons/favicon.ico" rel="shortcut icon" />
                <meta content="#2b5797" name="msapplication-TileColor" />
                <meta content="/icons/browserconfig.xml" name="msapplication-config" />
            </head>
            <body
                className={clsx(
                    "group/body dark max-w-full relative h-auto overflow-x-hidden w-screen min-h-screen overflow-y-auto data-[disContents=true]:contents bg-background",
                    /* "contents", // Remove this if it causes issues. Added on 6-27 to handle sticky sidebar. */
                    fontSans.variable,
                    preferFs && "preferFs",
                )}
                id="Ulld-body-root"
            >
                <Navbar
                    logo={DemoLogo}
                    navConfig={
                        appConfig.navigation as AppConfigSchemaOutput["navigation"]
                    }
                    noteTypes={appConfig.noteTypes as AppConfigSchemaOutput["noteTypes"]}
                />
                <SecondaryNav
                    navConfig={
                        appConfig.navigation as AppConfigSchemaOutput["navigation"]
                    }
                    noteTypes={appConfig.noteTypes as AppConfigSchemaOutput["noteTypes"]}
                />
                {props.children}
                <Toaster />
                <Footer logo={DemoLogo} />
            </body>
        </html>
    );
};

export default RootLayout;

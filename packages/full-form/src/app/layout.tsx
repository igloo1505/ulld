import "../styles/globals.scss";
import "@ulld/tailwind/defaultStyles.scss";
import React from "react";
import { fontSans } from "@ulld/tailwind/defaultFont";
import localFont from "next/font/local";
import clsx from "@ulld/utilities/cn";
import { cookies } from "next/headers"

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

const RootLayout = async (props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) => {

    const cookieJar = cookies();

    const preferFs = cookieJar.has("preferFs");
    const darkMode = true

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
                "group/html overflow-x-hidden max-w-screen min-h-screen js-focus-visible border-border min-scrollbar bg-background",
                darkMode && "dark",
                appFont.variable,
            )}
            {...p}
        >
            <body
                className={clsx(
                    "group/body @container/body bg-background min-scrollbar border-border max-w-full overflow-x-hidden inline",
                    fontSans.variable,
                    darkMode && "dark",
                    preferFs && "preferFs",
                )}
                id={`Ulld-body-root`}
            >
                {props.children}
            </body>
        </html>
    );
};

export default RootLayout;

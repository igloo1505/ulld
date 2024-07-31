import clsx from 'clsx'
import "../styles/tailwindInit.scss"
import "@ulld/tailwind/defaultStyles.scss"
/* import "@ulld/tailwind/websiteStyles.scss"; */
import type { Metadata } from 'next'
import React from 'react'
import localFont from "next/font/local";
import { fontSans } from "@ulld/tailwind/defaultFont";
import MathjaxProvider from "@ulld/utilities/providers-mathjax"


export const metadata: Metadata = {
    title: 'Uh Little Less Dum',
    description: 'The world has enough stupid people.',
}

const appFont = localFont({
    variable: "--ulld-app-font",
    src: [
        {
            path: "../../../../apps/website/src/assets/appFont/DM_Sans/static/DMSans-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../../../apps/website/src/assets/appFont/DM_Sans/static/DMSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../../apps/website/src/assets/appFont/DM_Sans/static/DMSans-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../../apps/website/src/assets/appFont/DM_Sans/static/DMSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../../apps/website/src/assets/appFont/DM_Sans/static/DMSans-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../../../../apps/website/src/assets/appFont/DM_Sans/static/DMSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../../apps/website/src/assets/appFont/DM_Sans/static/DMSans-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
    ],
    display: "swap",
});

const RootLayout = async (props: {
    children: React.ReactNode
    modal: React.ReactNode
}) => {
    const darkMode = true
    const settings = { tooltips: true }

    const preferFs = true
    let colorMode = "dark"

    let p = {
        "data-theme": colorMode,
        "data-color-mode": colorMode,
    }


    /* TODO: Add .noTooltips class to html element according to settings. Create function to toggle class when toggling setting. */

    return (
        <html
            lang="en"
            className={clsx(
                "group/html overflow-x-hidden max-w-screen min-h-screen js-focus-visible dark border-border min-scrollbar bg-background",
                appFont.variable,
            )}
            {...p}
        >
            <head>
            </head>
            <body
                className={clsx("group/body dark",
                    fontSans.variable,
                    preferFs && "preferFs")}
                id={`Ulld-body-root`}
            >
                <MathjaxProvider>
                {props.children}
                </MathjaxProvider>
            </body>
        </html>
    )
}


export default RootLayout

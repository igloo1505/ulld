import clsx from 'clsx'
import "@ulld/tailwind/themes/green.scss"
import "@ulld/tailwind/defaultStyles.scss"
import "../styles/mdx.scss"
import "../styles/globals.scss"
import "../styles/plot/rechart.scss"
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import React from 'react'
import { StateWrappedUI } from "@ulld/state/wrappers/stateWrappedUI"
import { fontSans } from "@ulld/tailwind/defaultFont"
import { InitialLoader } from "@ulld/utilities/initialLoader"



export const metadata: Metadata = {
    title: 'Uh Little Less Dum',
    description: 'The world has enough stupid people.',
}


const RootLayout = async (props: {
    children: React.ReactNode
    modal: React.ReactNode
}) => {
    const cookieJar = cookies()
    const darkMode = cookieJar.has("darkMode")

    /* let settings = settingSchema.parse(s) */

    const preferFs = cookieJar.has("preferFs")
    const _theme = cookieJar.get("ulld-theme");
    let colorMode = darkMode ? "dark" : "light"

    let p = {
        "data-theme": colorMode,
        "data-color-mode": colorMode,
        "data-ulld-theme": _theme?.value || "violet",
        "data-js-focus-visible": "",
    };


    /* TODO: Add .noTooltips class to html element according to settings. Create function to toggle class when toggling setting. */

    return (
        <html
            lang="en"
            className={clsx("group/html js-focus-visible", darkMode && "dark", process.env.NODE_ENV === "development" && "debug-screens")}
            {...p}
        >
            <head>
                <link rel="icon" href="/icons/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
            </head>
            <body
                className={clsx("group/body",
                    fontSans.variable,
                    preferFs && "preferFs")}
                id={`Ulld-body-root`}
            >
                <InitialLoader />
                <StateWrappedUI
                />
                {props.children}
                {props.modal && props.modal}
            </body>
        </html>
    )
}


export default RootLayout

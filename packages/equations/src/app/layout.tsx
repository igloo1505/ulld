import clsx from 'clsx'
import "@ulld/tailwind/defaultStyles.scss"
import "../styles/mdx.scss"
import "../styles/globals.scss"
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import React from 'react'
import { StateWrappedUI } from "@ulld/state/wrappers/stateWrappedUI"
import { Toaster } from "@ulld/tailwind/toaster"
import { fontSans } from "@ulld/tailwind/defaultFont"


export const metadata: Metadata = {
    title: 'Uh Little Less Dum',
    description: 'The world has enough stupid people.',
}



const RootLayout = async (props: {
    children: React.ReactNode
    modal: React.ReactNode
}) => {
    /* await writeConfigJson(lazyTestConfig, "/Users/bigsexy/Desktop/currentProjects/ulld/apps/sandbox") */
    /* const config = getInternalConfig(appConfig as any as AppConfigSchemaOutput) */
    /* logger.debug(JSON.stringify(config, null, 4), { label: "Config" }) */

    const cookieJar = cookies()
    /* const darkMode = cookieJar.has("darkMode") */
    const darkMode = true

    /* let settings = settingSchema.parse(s) */

    const preferFs = cookieJar.has("preferFs")
    let colorMode = darkMode ? "dark" : "light"

    let p = {
        "data-theme": colorMode,
        "data-color-mode": colorMode,
    }




    /* TODO: Add .noTooltips class to html element according to settings. Create function to toggle class when toggling setting. */

    return (
        <html
            lang="en"
            className={clsx("group/html js-focus-visible", darkMode && "dark", process.env.NODE_ENV === "development" && "debug-screens")}
            data-js-focus-visible=""
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
                <StateWrappedUI
                />
                {props.children}
                <Toaster />
                {props.modal && props.modal}
            </body>
        </html>
    )
}


export default RootLayout

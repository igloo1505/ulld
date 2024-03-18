import clsx from 'clsx'
import "@ulld/tailwind/defaultStyles.scss"
import "./styles.scss"
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { AppConfigSchemaOutput, getInternalConfig } from '@ulld/configschema'
import React from 'react'
/* import { RequireJsLoader } from "@ulld/utilities/loaders" */
import { StateWrappedUI } from "@ulld/state/wrappers"
import { Toaster } from "@ulld/tailwind/toaster"
import { fontSans } from "@ulld/tailwind/defaultFont"
import appConfig from "#/appConfig.ulld.json"
/* import "shiki/themes/dracula.mjs" */




export const metadata: Metadata = {
    title: 'Uh Little Less Dum',
    description: 'The world has enough stupid people.',
}



const RootLayout = async (props: {
    children: React.ReactNode
    modal: React.ReactNode
}) => {
    /* await writeConfigJson(lazyTestConfig, "/Users/bigsexy/Desktop/currentProjects/ulld/apps/sandbox") */
    const config = getInternalConfig(appConfig as any as AppConfigSchemaOutput)
    /* logger.debug(JSON.stringify(config, null, 4), { label: "Config" }) */

    const cookieJar = cookies()
    /* const darkMode = cookieJar.has("darkMode") */
    const darkMode = true
    /* const s = await prisma.settings.findFirst({ */
    /*     where: { */
    /*         id: 1 */
    /*     } */
    /* }) */

    /* let settings = settingSchema.parse(s) */
    const settings = { tooltips: true }

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
            className={clsx("group/html js-focus-visible", darkMode && "dark", Boolean(settings && settings.tooltips === false) && "noTooltips", process.env.NODE_ENV === "development" && "debug-screens")}
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
                    settings={settings}
                    darkMode={darkMode}
                    config={config}
                />
                {props.children}
                <Toaster />
                {props.modal && props.modal}
            </body>
        </html>
    )
}


export default RootLayout

import clsx from "clsx";
import "@ulld/tailwind/defaultStyles.scss";
/* import "./styles.css" */
/* import "#/styles/mdx.scss" */
/* import type { Metadata } from 'next' */
import { cookies } from "next/headers";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import React from "react";
import { StateWrappedUI } from "@ulld/state/wrappers/stateWrappedUI";
import { Toaster } from "@ulld/tailwind/toaster";
import { fontSans } from "@ulld/tailwind/defaultFont";
import appConfig from "#/appConfig.ulld.json";
import { prisma } from "@ulld/database/db";
import { settingSchema } from "@ulld/parsers/settings/settingsParser";
import Navbar from "#/components/slots/navigation/navbar"
import SecondaryNav from "#/components/slots/navigation/secondaryNavigation";
import DefaultCommandPalette from "#/components/slots/commandPalette/main"
import DefaultConfirmationModal from "#/components/slots/ui/confirmationModal";


/* export const metadata: Metadata = { */
/*     title: 'Uh Little Less Dum', */
/*     description: 'The world has enough stupid people.', */
/* } */

const RootLayout = async (props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) => {


    const cookieJar = cookies();
    const darkMode = cookieJar.has("darkMode")
    const _settings = await prisma.settings.findFirst({
        where: {
            id: 1
        }
    })

    let settings = settingSchema.parse(_settings)

    const preferFs = cookieJar.has("preferFs");
    let colorMode = darkMode ? "dark" : "light";

    let p = {
        "data-theme": colorMode,
        "data-color-mode": colorMode,
    };


    return (
        <html
            lang="en"
            className={clsx(
                "group/html js-focus-visible",
                darkMode && "dark",
                Boolean(settings && settings.tooltips === false) && "noTooltips"
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
                    "group/body",
                    fontSans.variable,
                    preferFs && "preferFs",
                )}
                id={`Ulld-body-root`}
            >
                <Navbar config={appConfig as any} />
                <SecondaryNav config={appConfig as any} />
                <StateWrappedUI
                    settings={settings}
                    config={appConfig as any}
                >
                <DefaultCommandPalette />
                <DefaultConfirmationModal />
                </StateWrappedUI>
                {props.children}
                <Toaster />
                {props.modal && props.modal}
            </body>
        </html>
    );
};

export default RootLayout;

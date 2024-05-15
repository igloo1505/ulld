import React from "react";
import { ReduxProvider } from "./ReduxProvider";
import Observers from "../observers/internalState";
import { OnlineStatusObserver } from "../observers/onlineStatus";
import { ToastListener } from "../observers/toast";
import { Toaster } from "@ulld/tailwind/toaster";
import { InitialLoader } from "@ulld/utilities/initialLoader";
import { cookies } from "next/headers";
import { getSettings } from "../actions/getSettings";
import fs from "fs";
import path from "path";
import { ParsedAppConfig } from "@ulld/configschema/types";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

/* FIX: These are missing from the complete app. Add them back once the sandbox is working. */
/* <Navbar /> */
/* <PermanentSidebar /> */
/* <CommandPalettePopover /> */
/* <ConfirmationModal /> */

const configPath = "appConfig.ulld.json";

/* NOTE: Children should only used in development for now. */
export const StateWrappedUI = async ({
    children,
    ignoreConfig = false,
}: {
    children?: React.ReactNode;
    ignoreConfig?: boolean;
}) => {
    const cookieJar = cookies();
    const settings = await getSettings();
    const darkMode = cookieJar.has("darkMode");
    const showModebar = cookieJar.has("showModebar");
    const themeCookie = cookieJar.get("theme");
    let config: ParsedAppConfig | null = null;
    if (!ignoreConfig) {
        const _config = path.join(process.cwd(), configPath);
        const configContent = await fs.promises.readFile(_config, {
            encoding: "utf-8",
        });
        if (!configContent) {
            throw new Error(`No config was found at ${_config}.`);
        }
        config = JSON.parse(configContent) as ParsedAppConfig;
    }

    return (
        <>
            <InitialLoader />
            <ReduxProvider findOverride>
                <div id="global-state-target" />
                <Observers
                    settings={settings}
                    darkMode={darkMode}
                    config={config}
                    showPlotlyModebar={showModebar}
                    themeCookie={themeCookie}
                />
                <div id="navbar-target" />
                <div id="sidebar-target" />
                <OnlineStatusObserver />
                <ToastListener />
                <Toaster />
                {children}
            </ReduxProvider>
        </>
    );
};

StateWrappedUI.displayName = "StateWrappedUI";

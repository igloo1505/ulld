import React from "react";
import { ReduxProvider } from "./ReduxProvider";
import Observers, { type ObserverProps } from "../observers/internalState";
import { OnlineStatusObserver } from "../observers/onlineStatus";
import { ToastListener } from "../observers/toast";
import { Toaster } from "@ulld/tailwind/toaster";
import {
    InitialLoader,
    InitialLoaderProps,
} from "@ulld/utilities/initialLoader";
import { cookies } from "next/headers";
import { getSettings } from "../actions/getSettings";
import type { ParsedAppConfig } from "@ulld/configschema/types";
import { getUlldConfig } from "@ulld/developer/utils";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

/* FIX: These are missing from the complete app. Add them back once the sandbox is working. */
/* <Navbar /> */
/* <PermanentSidebar /> */
/* <CommandPalettePopover /> */
/* <ConfirmationModal /> */

/* NOTE: Children should only used in development for now. */
export const StateWrappedUI = async ({
    children,
    ignoreConfig = false,
    store,
    loader,
    observers
}: {
    children?: React.ReactNode;
    ignoreConfig?: boolean;
    store?: ToolkitStore;
    loader?: InitialLoaderProps;
    observers?: Partial<ObserverProps>;
}) => {
    const cookieJar = cookies();
    const settings = await getSettings();
    const darkMode = cookieJar.has("darkMode");
    const showModebar = cookieJar.has("showModebar");
    const themeCookie = cookieJar.get("theme");
    let config: ParsedAppConfig | null = null;
    if (!ignoreConfig) {
        /* const _config = path.join(process.cwd(), configPath); */
        /* if(_confi) */
        config = getUlldConfig() as ParsedAppConfig;
    }

    return (
        <>
            <InitialLoader {...loader} />
            <ReduxProvider store={store}>
                <div id="global-state-target" />
                <Observers
                    settings={settings}
                    darkMode={darkMode}
                    config={config}
                    showPlotlyModebar={showModebar}
                    themeCookie={themeCookie}
                    {...observers}
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

import React from "react";
import { ReduxProvider } from "./ReduxProvider";
import Observers, { type ObserverProps } from "../observers/internalState";
import { OnlineStatusObserver } from "../observers/onlineStatus";
import { ToastListener } from "../observers/toast";
import { Toaster } from "@ulld/tailwind/toaster";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import {
    InitialLoader,
    InitialLoaderProps,
} from "@ulld/utilities/initialLoader";
import { cookies } from "next/headers";
import { getSettings } from "../actions/getSettings";
import type { ParsedAppConfig } from "@ulld/configschema/types";
import { getUlldConfig } from "@ulld/developer/utils";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { ParsedSettings } from "@ulld/parsers/settings/settingsParser";
import { makeStore } from "@ulld/state/store";

/* NOTE: Children should only used in development for now. */
export const StateWrappedUI = async ({
    children,
    ignoreConfig = false,
    store: _store,
    loader,
    observers,
    settings: _settings,
    config,
    ignoreSettings,
    ignoreOnlineStatus,
}: {
    children?: React.ReactNode;
    ignoreConfig?: boolean;
    ignoreSettings?: boolean;
    store?: ToolkitStore;
    loader?: InitialLoaderProps;
    observers?: Partial<ObserverProps>;
    settings?: ParsedSettings;
    config?: AppConfigSchemaOutput;
    ignoreOnlineStatus?: boolean;
}) => {
    const cookieJar = cookies();
    const store = _store ? _store : makeStore()
    let settings = _settings;
    if (!settings && !ignoreSettings) {
        settings = await getSettings();
    }
    /* const settings = _settings ? _settings : ignoreSettings ? undefined : await getSettings(); */
    const darkMode = cookieJar.has("darkMode");
    const showModebar = cookieJar.has("showModebar");
    const themeCookie = cookieJar.get("theme");
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
                    noSettings={ignoreSettings}
                    settings={settings}
                    darkMode={darkMode}
                    config={config}
                    showPlotlyModebar={showModebar}
                    themeCookie={themeCookie}
                    {...observers}
                />
                <div id="navbar-target" />
                <div id="sidebar-target" />
                <OnlineStatusObserver ignoreOnlineStatus={ignoreOnlineStatus} />
                <ToastListener />
                <Toaster />
                {children}
            </ReduxProvider>
        </>
    );
};

StateWrappedUI.displayName = "StateWrappedUI";

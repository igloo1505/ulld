"use client";
import { usePathname } from "next/navigation";
import { connect } from "react-redux";
import { htmlEm, setInitialBrowserProps } from "../actions/clientOnly/dom";
import { setConfigState } from "../state/slices/config";
import { setLocalSettings } from "../state/slices/settings";
import { setDarkmode, showNoteSheet } from "../state/slices/ui";
import { RootState } from "../state/store";
import { keyDown } from "../listeners/keydown";
import { useEffect } from "react";
import {useUlldStore} from "@ulld/hooks/useUlldStore"
import { ParsedAppConfig } from "@ulld/configschema/types";
import { ParsedSettings } from "@ulld/parsers/settings/settingsParser";
import { ThemeOptions } from "@ulld/tailwind/themeUtils";
import { changeTheme } from "@ulld/state/actions/client/theming";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

const connector = connect((state: RootState, props: any) => ({
    sidebarOpen: state.UI.sidebar.open,
    noteSheetOpen: state.UI.panels.noteSheet,
    props: props,
}));

interface ListenerType {
    event: "resize" | "keydown" | "scroll";
    function: any;
    target: "window" | "document";
    call?: boolean;
}

const listenerMap: ListenerType[] = [
    /* { */
    /*     event: "resize", */
    /*     function: resize, */
    /*     target: "window", */
    /*     call: true, */
    /* }, */
    {
        event: "keydown",
        function: keyDown,
        target: "document",
    },
];

interface P {
    settings: ParsedSettings;
    darkMode: boolean;
    config: ParsedAppConfig | null;
    showPlotlyModebar: boolean;
    noteSheetOpen: boolean;
    themeCookie?: ThemeOptions;
    store: ToolkitStore;
}

const applyHtmlClass = (cls: string, type: "add" | "remove" | "toggle") => {
    htmlEm()?.classList[type](cls);
};

const Observers = connector(
    ({
        settings,
        showPlotlyModebar,
        darkMode,
        noteSheetOpen,
        config,
        themeCookie,
    }: P) => {
        const pathname = usePathname();
        const store = useUlldStore()

        useEffect(() => {
            if (!themeCookie) {
                let htmlTheme = htmlEm()?.getAttribute("data-ulld-theme") || "violet";
                changeTheme(htmlTheme);
            }
        }, [themeCookie]);

        useEffect(() => {
            applyHtmlClass("noPlotlyModebar", showPlotlyModebar ? "remove" : "add");
        }, [showPlotlyModebar]);

        useEffect(() => {
            setInitialBrowserProps(darkMode);
        }, []);

        useEffect(() => {
            if (config) {
                store?.dispatch(setConfigState(config));
            }
        }, [config, store]);

        useEffect(() => {
            store?.dispatch(setDarkmode(darkMode));
            applyHtmlClass("dark", darkMode ? "add" : "remove");
        }, [darkMode, store]);

        useEffect(() => {
            if (!settings) {
                return console.log("No settings object returned from postgres");
            }
            if (settings) {
                store?.dispatch(setLocalSettings(settings));
                applyHtmlClass(
                    "noTooltips",
                    settings.tooltips === false ? "add" : "remove",
                );
            }
        }, [settings, darkMode, store]);

        /* TODO: Move this to the keydown listener that already exists instead of appending here. Leaving for now because I have to fix a bug and the library closes in 13 minutes. */
        const keymapListener = (e: KeyboardEvent) => {
            if (e.code === "KeyK" && e.metaKey) {
                store?.dispatch(showNoteSheet(!noteSheetOpen));
            }
        };

        useEffect(() => {
            window.addEventListener("keydown", keymapListener);
            return () => window.removeEventListener("keydown", keymapListener);
        }, []);

        useEffect(() => {
            if (pathname === "/") {
                document.body.classList.add("noScroll");
            } else {
                document.body.classList.remove("noScroll");
            }
        }, [pathname]);

        useEffect(() => {
            listenerMap.forEach((l) => {
                console.log("l in listenerMap: ", l)
                if (l.target === "window") {
                    window.addEventListener(l.event, l.function);
                }
                if (l.target === "document") {
                    document.addEventListener(l.event, l.function);
                }
                if (l.call) {
                    l.function();
                }
            });
            return () => {
                listenerMap.forEach((l) => {
                    if (l.target === "window") {
                        window.removeEventListener(l.event, l.function);
                    }
                    if (l.target === "document") {
                        document.removeEventListener(l.event, l.function);
                    }
                });
            };
        }, []);
        return null;
    },
);

Observers.displayName = "Observers";

export default Observers;

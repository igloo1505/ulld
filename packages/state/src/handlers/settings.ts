import { AppSettings } from "@ulld/parsers/settings/settingsParser";
import { htmlEm, applyHtmlClass } from "../actions/clientOnly/dom";
import { setLocalSettings } from "../state/slices/settings";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

export const handleSettingsChange = (
    settings: AppSettings,
    store: ToolkitStore,
) => {
    store?.dispatch(setLocalSettings(settings));
    applyHtmlClass("noTooltips", settings.tooltips === false ? "add" : "remove");
    window.dispatchEvent(
        new CustomEvent("set-app-settings", { detail: settings }),
    );
};

"use client"

import { AppSettings } from "@ulld/parsers/settings/settingsParser"
import { useState } from "react"
import { useEventListener } from "./useEventListener"


declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "set-app-settings": CustomEvent<AppSettings>;
    }
}

export const useAppSettings = () => {
    const [appSettings, setAppSettings] = useState<AppSettings | undefined>(undefined)

    useEventListener("set-app-settings", (e) => setAppSettings(e.detail))

    return appSettings
}

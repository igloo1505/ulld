"use client"
import type { AppConfigSchemaOutput } from "@ulld/configschema/zod/main"
import { useLocalStorage } from "./useLocalStorage"

export const useAppConfig = () => {

    const [appConfig, setAppConfig] = useLocalStorage("ulld-app-config", undefined, {})

    return appConfig as AppConfigSchemaOutput | undefined
}

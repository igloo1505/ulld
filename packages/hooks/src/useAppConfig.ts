"use client"
import type { AppConfigSchemaOutput } from "@ulld/configschema/types"
import { useLocalStorage } from "./useLocalStorage"

export const useAppConfig = (initialConfig?: AppConfigSchemaOutput) => {
    const [appConfig, setAppConfig] = useLocalStorage<AppConfigSchemaOutput>("ulld-app-config", initialConfig as AppConfigSchemaOutput | undefined, {})

    return [appConfig, setAppConfig] as [AppConfigSchemaOutput | undefined, ((val: AppConfigSchemaOutput) => void)]
}

import { Settings } from '@ulld/database/internalDatabaseTypes'
import { ParsedAppConfig } from '@ulld/configschema/types'

export type SettingBoolean = "tooltips" | "summary_showCitations" | "summary_showTags" | "cleanOnSync"


// TODO: Change this Settings object to a zod return type and parse appropriately.
export interface StatePassedToClient {
    settings?: Settings | null
    darkMode: boolean
    config?: ParsedAppConfig
}

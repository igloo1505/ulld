import { AppConfigSchemaOutput, ParsedAppConfig } from "@ulld/configschema"
import {ParsedSettings} from "@ulld/parsers/settings"

export interface StatePassedToClient {
    settings?: ParsedSettings | null
    darkMode: boolean
    config?: AppConfigSchemaOutput
}

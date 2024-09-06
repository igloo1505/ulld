import { ParsedAppConfig } from "../../types.js";
import { AppConfigSchemaOutput } from "../main.js";
import { secondaryConfigParse } from "./main.js";

export const configSecondaryParse = (initialParsedConfig: AppConfigSchemaOutput): ParsedAppConfig => {
    return secondaryConfigParse.parse(initialParsedConfig)
}

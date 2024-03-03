import { ParsedAppConfig } from "../../configUtilityTypes";
import { AppConfigSchemaOutput } from "../main";
import {  secondaryConfigParse } from "./main";

export const configSecondaryParse = (initialParsedConfig: AppConfigSchemaOutput): ParsedAppConfig => {
    return secondaryConfigParse.parse(initialParsedConfig)
}

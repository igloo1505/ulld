import { AppConfigSchemaOutput } from "./zod/main";
import { ConfigSearchParamSchemaInput, applyConfigOverrideMap, configSearchParamOverrideSchema } from "./zod/searchParamOverrides/main";

export const applySearchParamConfigOverride = <T extends ConfigSearchParamSchemaInput | object>(baseConfig: AppConfigSchemaOutput, searchParams: T): AppConfigSchemaOutput => {
    let sp = configSearchParamOverrideSchema.parse(searchParams)
    let bc = baseConfig
    Object.keys(sp).forEach((k) => {
        bc = applyConfigOverrideMap[k as keyof typeof sp](baseConfig, sp)
    })
    return bc
}

import {  ParsedAppConfig } from "@ulld/configschema/types"
import { DocumentTypeConfig } from "@ulld/configschema/zod/documentConfigSchema"
import { DocTypes } from "@ulld/configschema/configUtilityTypes/docTypes"



type ConfigMap = { [k in DocTypes]: DocumentTypeConfig }

export const documentConfigMap = (parsedConfig: ParsedAppConfig): ConfigMap => {
    let d = {} as ConfigMap
    parsedConfig.noteTypes.forEach((t: ParsedAppConfig["noteTypes"][number]) => {
        d[t.docType as DocTypes] = t
    })
    return d
}


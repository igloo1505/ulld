import { DocumentTypeConfig, ParsedAppConfig } from "@ulld/config"
import { DocTypes } from "../prismaMdxRelations/zod/general"

type ConfigMap = { [k in DocTypes]: DocumentTypeConfig }

export const documentConfigMap = (parsedConfig: ParsedAppConfig): ConfigMap => {
    let d = {} as ConfigMap
    parsedConfig.noteTypes.forEach((t: ParsedAppConfig["noteTypes"][number]) => {
        d[t.docType as DocTypes] = t
    })
    return d
}


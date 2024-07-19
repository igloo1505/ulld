import { DocumentTypeConfig } from "@ulld/configschema/zod/documentConfigSchema"
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main"


type ConfigMap = Record<string, DocumentTypeConfig>


export const documentConfigMap = (parsedConfig: AppConfigSchemaOutput): ConfigMap => {
    let d = {} as ConfigMap
    parsedConfig.noteTypes.forEach((t: AppConfigSchemaOutput["noteTypes"][number]) => {
        d[t.docType as string] = t
    })
    return d
}


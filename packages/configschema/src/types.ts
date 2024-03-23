import { DocumentTypeConfig } from "./zod/documentConfigSchema"
import { getInternalConfig } from "./zod/getInternalConfig"

export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string
}

export type ParsedAppConfig = ReturnType<typeof getInternalConfig>

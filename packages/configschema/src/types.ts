import type { DocumentTypeConfig, getInternalConfig, secondaryConfigParse } from './zod'

export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string
}

export type ParsedAppConfig = ReturnType<typeof getInternalConfig>

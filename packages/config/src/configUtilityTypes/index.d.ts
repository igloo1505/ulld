import { DocumentTypeConfig } from "../zod/documentConfigSchema"
import type { secondaryConfigParse } from "../zod/secondaryConfigParse/main"
import {z} from 'zod'

export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string
}

export type ParsedAppConfig = z.output<typeof secondaryConfigParse>

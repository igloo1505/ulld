import {z} from 'zod'
import { DocumentTypeConfig } from "./zod/documentConfigSchema"
import { getInternalConfig } from "./zod/getInternalConfig"
import { themeSchema } from './zod/ui/main'
export type {SidebarLink} from "./zod/navigationConfig"

export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string
}

export type ParsedAppConfig = ReturnType<typeof getInternalConfig>
export type ThemeOptions = z.output<typeof themeSchema>

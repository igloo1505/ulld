import { DocumentTypeConfig } from "./zod/documentConfigSchema"
import { getInternalConfig } from "./zod/getInternalConfig"
export type {SidebarLink} from "./zod/navigationConfig"
export * from "./developer/slotMapInternalType"
export type * from "./developer/eventMethodTypes"

export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string
}

export type ParsedAppConfig = ReturnType<typeof getInternalConfig>

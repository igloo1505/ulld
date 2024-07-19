import { BuildStaticDataOutput } from "./buildStaticData/types"
import { DocumentTypeConfig } from "./zod/documentConfigSchema"
import { getInternalConfig } from "./zod/getInternalConfig"
import { AppConfigSchemaOutput } from "./zod/main"
export type {SidebarLink} from "./zod/navigationConfig"
export * from "./developer/slotMapInternalType"
export type * from "./developer/eventMethodTypes"
export type * from "./zod/main"
export type * from "./baseApp/main"
export type * from "./baseApp/slot"

export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string
}

export type ParsedAppConfig = ReturnType<typeof getInternalConfig>


export type AppConfigGroup = {
    build: BuildStaticDataOutput,
    app: AppConfigSchemaOutput
}

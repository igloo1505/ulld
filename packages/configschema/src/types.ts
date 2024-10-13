import { BuildStaticDataOutput } from "./buildStaticData/types.js"
import { DocumentTypeConfig } from "./zod/documentConfigSchema.js"
import { AppConfigSchemaOutput } from "./zod/main.js"
export type { SidebarLink } from "./zod/navigationConfig.js"
export * from "./developer/slotMapInternalType.js"
export type * from "./developer/eventMethodTypes.js"
export type * from "./zod/main.js"
export type * from "./baseApp/main.js"
export type * from "./baseApp/slot.js"
export type * from "./zod/refinedConfigs/index.js"


export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string
}

export type ParsedAppConfig = AppConfigSchemaOutput


export type AppConfigGroup = {
    build: BuildStaticDataOutput,
    app: AppConfigSchemaOutput
}

export type DefaultColorKey = keyof AppConfigSchemaOutput["UI"]["colors"]

export type ColorBooleanRecord = Record<DefaultColorKey, boolean>

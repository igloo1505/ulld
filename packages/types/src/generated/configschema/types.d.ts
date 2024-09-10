import { BuildStaticDataOutput } from "./buildStaticData/types.js";
import { DocumentTypeConfig } from "./zod/documentConfigSchema.js";
import { getInternalConfig } from "./zod/getInternalConfig.js";
import { AppConfigSchemaOutput } from "./zod/main.js";
export type { SidebarLink } from "./zod/navigationConfig.js";
export * from "./developer/slotMapInternalType.js";
export type * from "./developer/eventMethodTypes.js";
export type * from "./zod/main.js";
export type * from "./baseApp/main.js";
export type * from "./baseApp/slot.js";
export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string;
}
export type ParsedAppConfig = ReturnType<typeof getInternalConfig>;
export type AppConfigGroup = {
    build: BuildStaticDataOutput;
    app: AppConfigSchemaOutput;
};
export type DefaultColorKey = keyof AppConfigSchemaOutput["UI"]["colors"];
export type ColorBooleanRecord = Record<DefaultColorKey, boolean>;
//# sourceMappingURL=types.d.ts.map
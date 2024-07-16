import { DocumentTypeConfig } from "./zod/documentConfigSchema";
import { getInternalConfig } from "./zod/getInternalConfig";
export type { SidebarLink } from "./zod/navigationConfig";
export * from "./developer/slotMapInternalType";
export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string;
}
export type ParsedAppConfig = ReturnType<typeof getInternalConfig>;
//# sourceMappingURL=types.d.ts.map
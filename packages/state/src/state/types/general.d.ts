import { Settings } from '@prisma/client';
import { ParsedAppConfig } from '@ulld/configschema';
export type SettingBoolean = "tooltips" | "summary_showCitations" | "summary_showTags" | "cleanOnSync";
export interface StatePassedToClient {
    settings?: Settings | null;
    darkMode: boolean;
    config?: ParsedAppConfig;
}
//# sourceMappingURL=general.d.ts.map
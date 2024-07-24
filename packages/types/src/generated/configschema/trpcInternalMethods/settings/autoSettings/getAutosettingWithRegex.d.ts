import { autoSetting } from "@ulld/database/internalDatabaseTypes";
import { ParsedAppConfig } from "@ulld/configschema/types";
import { AutoSettingWithRegex } from "../../../trpc/types";
export declare const getConfigAutoSettings: (_config?: ParsedAppConfig) => {
    glob: string;
    value: string;
    type: autoSetting;
    id?: number;
}[];
export declare const getAutoSettingsWithRegex: (type?: autoSetting) => Promise<AutoSettingWithRegex[]>;
//# sourceMappingURL=getAutosettingWithRegex.d.ts.map
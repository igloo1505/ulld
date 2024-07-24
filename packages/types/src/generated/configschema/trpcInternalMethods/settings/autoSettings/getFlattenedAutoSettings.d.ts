import { ParsedAppConfig } from "@ulld/configschema/types";
import { AutoSettingWithRegex } from "../../../trpc/types";
export declare const getFlatAutoSettings: (autoSettings: AutoSettingWithRegex[], _config?: ParsedAppConfig) => {
    autoTags: {
        glob: string;
        value: string;
    }[];
    autoTopics: {
        glob: string;
        value: string;
    }[];
    autoSubjects: {
        glob: string;
        value: string;
    }[];
};
//# sourceMappingURL=getFlattenedAutoSettings.d.ts.map
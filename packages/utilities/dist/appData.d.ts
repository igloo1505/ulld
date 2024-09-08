import { InternalAppName } from "@ulld/types";
export interface FundingItem {
    pkgJsonType: string;
    websiteKey: string;
    url: string;
}
interface UlldAppData {
    isLocalDev: boolean;
    templateRepo: {
        url: string;
        branch: string;
        buildDirName: string;
    };
    funding: FundingItem[];
    buildDefaults: {
        bibFilePath: string;
    };
    pathsToCopyForDocumentation: string[];
    projectRepo: {
        url: string;
        githubLogin: string;
        githubAccountType: "user" | "organization";
    };
    includeInTypes: InternalAppName[];
}
export declare const appData: UlldAppData;
export {};
//# sourceMappingURL=appData.d.ts.map
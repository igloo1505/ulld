import { InternalAppName } from "@ulld/types";
import { validIconNameList } from "./types/enums/validIconName";
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
    packagesBuildingToDist: InternalAppName[];
}
interface InternalAppLocation {
    label: string;
    url: string;
    desc?: string;
    keywords?: string[];
    /** ValidIconName enum. Need to generate that enum in the utilities package to make it available without causing a circular dependency issue. **/
    defaultIcon: typeof validIconNameList[number];
    isModalRoute?: boolean;
}
export declare const internalAppLocations: InternalAppLocation[];
export declare const appData: UlldAppData;
export {};
//# sourceMappingURL=appData.d.ts.map
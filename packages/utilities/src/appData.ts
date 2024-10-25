import type { InternalAppName } from "@ulld/types";

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



export const appData: UlldAppData = {
    isLocalDev: true,
    buildDefaults: {
        bibFilePath: "./citations.bib",
    },
    templateRepo: {
        url: "https://github.com/igloo1505/ulldApp.git",
        branch: "main",
        buildDirName: "ulldApp",
    },
    projectRepo: {
        url: "https://github.com/igloo1505/ulld",
        githubLogin: "igloo1505",
        githubAccountType: "user",
    },
    pathsToCopyForDocumentation: [
        "packages/api/src/individualTypesForDocumentation/**",
    ],
    funding: [
        {
            pkgJsonType: "paypal",
            websiteKey: "paypalDonate",
            url: "https://www.paypal.com/donate/?hosted_button_id=W22RTUJ2RPZDU",
        },
        {
            pkgJsonType: "patreon",
            websiteKey: "patreon",
            url: "https://www.patreon.com/uhlittlelessdum/about",
        },
        {
            pkgJsonType: "GitHub Sponsors",
            websiteKey: "github",
            url: "https://github.com/igloo1505/ulld",
        },
    ],
    includeInTypes: ["@ulld/configschema", "@ulld/api"],
    packagesBuildingToDist: [
        "@ulld/utilities",
        "@ulld/build",
        "@ulld/configschema",
    ],
};

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
    defaultIcon: typeof validIconNameList[number]
    isModalRoute?: boolean
}

export const internalAppLocations: InternalAppLocation[] = [
    {
        label: "Bookmarks",
        url: "/bookmarks",
        keywords: [],
        defaultIcon: "bookmarks"
    }, 
    {
        label: "Bibliography",
        url: "/bibliography",
        defaultIcon: "library"
    },
    {
        label: "Navigation",
        url: "/navigation",
        defaultIcon: "route",
        isModalRoute: true
    },
    {
        label: "Task Manager",
        url: "/todo",
        defaultIcon: "todo",
    },
    {
        label: "Create To Do list",
        url: "/todo/add/list",
        defaultIcon: "pen"
    },
    {
        label: "Snippets",
        url: "/snippets",
        defaultIcon: "code",
    },
    {
        label: "Add Snippet",
        url: "/snippets/add",
        defaultIcon: "cpu"
    },
    {
        label: "Equations",
        url: "/equations",
        defaultIcon: "math",
    },
    {
        label: "Add Equation",
        url: "/equations/add",
        defaultIcon: "equation"
    },
    {
        label: "Docs",
        url: "/docs",
        defaultIcon: "newspaper",
    },
    {
        label: "Component Docs",
        url: "/componentDocs",
        defaultIcon: "origami",
    },
    {
        label: "Dictionary",
        url: "/dictionary",
        defaultIcon: "definition",
    },
    {
        label: "Settings",
        url: "/settings",
        defaultIcon: "settings",
    },
    {
        label: "Auto-Property Settings",
        url: "/settings/autoSettings",
        defaultIcon: "settings"
    },
]

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
    includeInTypes: ["@ulld/configschema"],
    packagesBuildingToDist: [
        "@ulld/utilities",
        "@ulld/build",
        "@ulld/configschema",
    ],
};

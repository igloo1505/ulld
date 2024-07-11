import { InternalAppName } from "@ulld/types";

export const appData = {
    isLocalDev: true,
    templateRepo: {
        url: "https://github.com/igloo1505/ulldApp.git",
        branch: "main",
        buildDirName: "ulldApp",
    },
    projectRepo: {
        url: "https://github.com/igloo1505/ulld",
    },
    includeInTypes: [
       "@ulld/configschema" 
    ] satisfies InternalAppName[],
};

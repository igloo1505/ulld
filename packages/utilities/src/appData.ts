import { InternalAppName } from "@ulld/types";

interface UlldAppData {
  isLocalDev: boolean;
  templateRepo: {
    url: string;
    branch: string;
    buildDirName: string;
  };
  projectRepo: {
    url: string;
    githubLogin: string;
    githubAccountType: "user" | "organization";
  };
  includeInTypes: InternalAppName[];
}

export const appData: UlldAppData = {
  isLocalDev: true,
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
  includeInTypes: [
        "@ulld/configschema",
    ],
};

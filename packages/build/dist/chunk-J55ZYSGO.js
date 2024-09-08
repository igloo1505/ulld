import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/templateFile.ts
init_esm_shims();

// src/utils/templateStringData.json with { type: 'json' }
var templateStringData_default = {
  basePath: "/Users/bigsexy/Desktop/current/ulld/packages/build/src/fileContent",
  data: [
    {
      path: "prismaSchema.txt",
      id: "prismaSchema",
      variables: [],
      typeName: "PrismaSchema"
    },
    {
      path: "settings/settingsPage.txt",
      id: "settingsPage",
      variables: [
        "PLUGIN_NAME",
        "PLUGIN_SETTING_PAGE_EXPORT"
      ],
      typeName: "SettingsPage"
    },
    {
      path: "prisma/clientGenerators/sqliteClientGenerator.txt",
      id: "sqliteClientGenerator",
      variables: [],
      typeName: "SqliteClientGenerator"
    },
    {
      path: "prisma/clientGenerators/postgresClientGenerator.txt",
      id: "postgresClientGenerator",
      variables: [],
      typeName: "PostgresClientGenerator"
    },
    {
      path: "npmrc/pnpm.txt",
      id: "pnpm",
      variables: [],
      typeName: "Pnpm"
    },
    {
      path: "noteType/noteTypePage.txt",
      id: "noteTypePage",
      variables: [
        "CATEGORY_ID",
        "BASE_URL"
      ],
      typeName: "NoteTypePage"
    },
    {
      path: "noteType/individualNotePage.txt",
      id: "individualNotePage",
      variables: [
        "CATEGORY_ID"
      ],
      typeName: "IndividualNotePage"
    },
    {
      path: "generalFiles/gitignore.txt",
      id: "gitignore",
      variables: [],
      typeName: "Gitignore"
    }
  ]
};

// src/classes/templateFile.ts
import path from "path";
import fs from "fs";
var TemplateFile = class {
  constructor(templateKey) {
    this.templateKey = templateKey;
    let itemData = templateStringData_default.data.find((f) => f.id === templateKey);
    if (!itemData) {
      throw new Error(`Could not find item data for id ${templateKey}`);
    }
    this.itemData = itemData;
    this.absPath = path.join(templateStringData_default.basePath, itemData.path);
  }
  absPath;
  itemData;
  getFileContent() {
    return fs.readFileSync(this.absPath, { encoding: "utf-8" });
  }
  getNewContent(replacements) {
    let c = this.getFileContent();
    for (const k in replacements) {
      c = c.replaceAll(
        `<<${k}>>`,
        replacements[k]
      );
    }
    return c;
  }
};

export {
  TemplateFile
};
//# sourceMappingURL=chunk-J55ZYSGO.js.map
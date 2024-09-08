import {
  appConfigSchema
} from "../chunk-NOI74XHG.js";
import "../chunk-GIS2R6SM.js";
import "../chunk-LXTIHGQR.js";
import "../chunk-QQ2TG4KG.js";
import "../chunk-OK5IR23I.js";
import "../chunk-2KTSX4SR.js";
import "../chunk-B3FF4PIA.js";
import "../chunk-GDQ3UHZV.js";
import "../chunk-3N3P3LRD.js";
import "../chunk-ZDHGZVOB.js";
import "../chunk-M6CS6OO2.js";
import "../chunk-4UV5WS6A.js";
import "../chunk-VZME7SM6.js";
import "../chunk-OGYC5DCG.js";
import "../chunk-YIBETHKR.js";
import "../chunk-RHCKX7MA.js";
import "../chunk-HKGNT4FZ.js";
import "../chunk-S27PH2PJ.js";
import "../chunk-JVMBHBYG.js";
import "../chunk-LM53CIXS.js";
import "../chunk-7HHTJWNK.js";
import "../chunk-I3NNDADD.js";
import "../chunk-UTZ6EIF3.js";
import "../chunk-HM4XKJP6.js";
import "../chunk-FA2KLNSC.js";
import "../chunk-QFJW4YZ5.js";
import "../chunk-OEZ4UI6D.js";
import "../chunk-57ZZZ55V.js";
import "../chunk-UXQ4RAFZ.js";
import "../chunk-UG7I3UUK.js";
import "../chunk-7OB2SMOT.js";
import "../chunk-Q45QUJC2.js";
import "../chunk-VHM7ROJU.js";
import "../chunk-FSIUFLEX.js";
import {
  __dirname
} from "../chunk-OJYONR4K.js";

// src/__scripts__/generateDefaultConfig.ts
import fs from "fs";
import path from "path";
var targetPath = path.join(
  __dirname,
  "../defaults/generatedDefaultConfigs/base.json"
);
var physicsMathPath = path.join(
  __dirname,
  "../defaults/generatedDefaultConfigs/physicsMath.json"
);
var baseTargetPath = "/Users/bigsexy/Desktop/current/ulldApp/appConfig.ulld.json";
var dummyConfig = {
  fsRoot: "/Users/bigsexy/Desktop/notes/content"
};
var physicsMathConfig = {
  fsRoot: "/Users/bigsexy/Desktop/notes/content",
  noteTypes: [
    {
      fs: "physics",
      id: "physics",
      label: "Physics",
      icon: "physics"
    },
    {
      fs: "math",
      id: "math",
      label: "Math",
      icon: "math"
    }
  ]
};
var personalConfig = {
  fsRoot: "/Users/bigsexy/Desktop/notes/content",
  code: {
    editor: {
      useVimMode: true
    }
  },
  noteTypes: [
    {
      fs: "physics",
      id: "physics",
      label: "Physics",
      icon: "physics"
    },
    {
      fs: "math",
      id: "math",
      label: "Math",
      icon: "math"
    },
    {
      fs: "cheatsheets",
      id: "cheatsheet",
      label: "Cheatsheets",
      icon: "newspaper"
    },
    {
      fs: "docs",
      id: "docs",
      label: "Docs",
      icon: "paperclip"
    },
    {
      fs: "guides",
      id: "guide",
      label: "Guides",
      icon: "gem"
    },
    {
      fs: "health",
      id: "health",
      label: "Health",
      icon: "heart"
    },
    {
      fs: "journal",
      id: "journal",
      label: "Journal",
      icon: "pen"
    },
    {
      fs: "quickNotes",
      id: "quickNotes",
      label: "Quick Notes",
      icon: "calendar-plus-2"
    },
    {
      fs: "quickThoughts",
      id: "quickThoughts",
      label: "Quick Thought",
      icon: "clock"
    },
    {
      fs: "recipes",
      id: "recipes",
      label: "Recipes",
      icon: "egg"
    },
    {
      fs: "references",
      id: "references",
      label: "References",
      icon: "glasses"
    },
    {
      fs: "tech",
      id: "tech",
      label: "Tech",
      icon: "cpu"
    }
  ]
};
var configs = [
  {
    path: targetPath,
    config: appConfigSchema.parse(dummyConfig)
  },
  {
    path: baseTargetPath,
    config: appConfigSchema.parse(physicsMathConfig)
  },
  {
    path: physicsMathPath,
    config: appConfigSchema.parse(physicsMathConfig)
  },
  {
    path: path.join(
      __dirname,
      "../defaults/generatedDefaultConfigs/personal/appConfig.ulld.json"
    ),
    config: appConfigSchema.parse(personalConfig)
  },
  {
    path: "/Users/bigsexy/dev-utils/ulld/appConfig.ulld.json",
    config: appConfigSchema.parse(personalConfig)
  }
];
for (const k of configs) {
  if (k.config) {
    let exists = fs.existsSync(k.path);
    if (!exists) {
      throw new Error(
        `parsedBaseConfig targetPath does not exist at ${k.path}`
      );
    }
    fs.writeFileSync(k.path, JSON.stringify(k.config, null, 4), {
      encoding: "utf-8"
    });
    console.log(`Wrote default config to ${k.path}`);
  }
}
//# sourceMappingURL=generateDefaultConfig.js.map
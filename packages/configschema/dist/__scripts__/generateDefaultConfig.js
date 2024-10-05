import {
  appConfigSchema
} from "../chunk-DM6EGNPR.js";
import "../chunk-7XKJIWWQ.js";
import "../chunk-5HJJIMHO.js";
import "../chunk-HHE6N47D.js";
import "../chunk-5LBDPOU3.js";
import "../chunk-XVHSMXND.js";
import "../chunk-W3Z5TGQR.js";
import "../chunk-G7O7W64T.js";
import "../chunk-XXHV3QPY.js";
import "../chunk-E4C6G2BG.js";
import "../chunk-PR34AQNQ.js";
import "../chunk-VDTKMESP.js";
import "../chunk-3HPJIY3U.js";
import "../chunk-3NPPOQMS.js";
import "../chunk-O2LWYL2Z.js";
import "../chunk-D743FZ2Q.js";
import "../chunk-WYAPQU7P.js";
import "../chunk-W52JW5S6.js";
import "../chunk-PD5TN5XF.js";
import "../chunk-AY57AZMJ.js";
import "../chunk-ENVRPPAG.js";
import "../chunk-DGANN2EY.js";
import "../chunk-FHTQCW2Y.js";
import "../chunk-MJBK275F.js";
import "../chunk-TNJIQDSN.js";
import "../chunk-C7Q6EMMC.js";
import "../chunk-D57TGXVB.js";
import "../chunk-55HJPQBL.js";
import "../chunk-5VKVDMSO.js";
import "../chunk-QY2CWEW7.js";
import "../chunk-6VCBDKOB.js";
import "../chunk-JJ7PAUIP.js";
import "../chunk-PESBV4SX.js";
import "../chunk-DVXEI7YQ.js";

// src/__scripts__/generateDefaultConfig.ts
import fs from "fs";
import path from "path";
var __dirname = import.meta.dirname;
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
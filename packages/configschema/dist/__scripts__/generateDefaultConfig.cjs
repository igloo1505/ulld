"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkORK3XHM3cjs = require('../chunk-ORK3XHM3.cjs');
require('../chunk-B4O6LZ64.cjs');
require('../chunk-M677MBJM.cjs');
require('../chunk-BMKGPO6Q.cjs');
require('../chunk-3VEE7NEQ.cjs');
require('../chunk-46A3VLRE.cjs');
require('../chunk-23W3BADL.cjs');
require('../chunk-5CNM4RYT.cjs');
require('../chunk-3DJT3TC6.cjs');
require('../chunk-O2M57WJV.cjs');
require('../chunk-SAAJV3BH.cjs');
require('../chunk-U7NIGYYL.cjs');
require('../chunk-O5G4CUM4.cjs');
require('../chunk-SVIL6GV2.cjs');
require('../chunk-KZPTNHLC.cjs');
require('../chunk-FGDHIBSN.cjs');
require('../chunk-6LXZO67T.cjs');
require('../chunk-HIZJVV3C.cjs');
require('../chunk-O5CTXNDN.cjs');
require('../chunk-O5HV2BYW.cjs');
require('../chunk-MZET64JI.cjs');
require('../chunk-J367RNK6.cjs');
require('../chunk-MQKT3OUL.cjs');
require('../chunk-76MVLTRY.cjs');
require('../chunk-DAJQG6UY.cjs');
require('../chunk-BCQTQSGV.cjs');
require('../chunk-UFNRIBN3.cjs');
require('../chunk-JU76D7R4.cjs');
require('../chunk-PXSYJX6W.cjs');
require('../chunk-XV6PA66C.cjs');
require('../chunk-KO6QBID2.cjs');
require('../chunk-IB2BTZA2.cjs');
require('../chunk-5DEJBS5Y.cjs');
require('../chunk-ZLIBX2HS.cjs');

// src/__scripts__/generateDefaultConfig.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var __dirname = import.meta.dirname;
var targetPath = _path2.default.join(
  __dirname,
  "../defaults/generatedDefaultConfigs/base.json"
);
var physicsMathPath = _path2.default.join(
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
    config: _chunkORK3XHM3cjs.appConfigSchema.parse(dummyConfig)
  },
  {
    path: baseTargetPath,
    config: _chunkORK3XHM3cjs.appConfigSchema.parse(physicsMathConfig)
  },
  {
    path: physicsMathPath,
    config: _chunkORK3XHM3cjs.appConfigSchema.parse(physicsMathConfig)
  },
  {
    path: _path2.default.join(
      __dirname,
      "../defaults/generatedDefaultConfigs/personal/appConfig.ulld.json"
    ),
    config: _chunkORK3XHM3cjs.appConfigSchema.parse(personalConfig)
  },
  {
    path: "/Users/bigsexy/dev-utils/ulld/appConfig.ulld.json",
    config: _chunkORK3XHM3cjs.appConfigSchema.parse(personalConfig)
  }
];
for (const k of configs) {
  if (k.config) {
    let exists = _fs2.default.existsSync(k.path);
    if (!exists) {
      throw new Error(
        `parsedBaseConfig targetPath does not exist at ${k.path}`
      );
    }
    _fs2.default.writeFileSync(k.path, JSON.stringify(k.config, null, 4), {
      encoding: "utf-8"
    });
    console.log(`Wrote default config to ${k.path}`);
  }
}
//# sourceMappingURL=generateDefaultConfig.cjs.map
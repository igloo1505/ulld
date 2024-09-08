"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk56GHHGNJcjs = require('../chunk-56GHHGNJ.cjs');
require('../chunk-I7MZI7RY.cjs');
require('../chunk-QDJ2YVFH.cjs');
require('../chunk-IUNLIPLR.cjs');
require('../chunk-BLK4DDNM.cjs');
require('../chunk-GBCQBBTN.cjs');
require('../chunk-IAIQ6ZJV.cjs');
require('../chunk-H5MJXYEE.cjs');
require('../chunk-O5FTVTS6.cjs');
require('../chunk-D3YJHT7O.cjs');
require('../chunk-7SUMHZ73.cjs');
require('../chunk-EVQ3OOMI.cjs');
require('../chunk-LE6CYVFH.cjs');
require('../chunk-TYONFHNA.cjs');
require('../chunk-SZCKFMBX.cjs');
require('../chunk-7K4IXJMC.cjs');
require('../chunk-6S7UGUY6.cjs');
require('../chunk-VTGYBXLV.cjs');
require('../chunk-J5ILOYTF.cjs');
require('../chunk-LCA4ZF72.cjs');
require('../chunk-4C2F7ODW.cjs');
require('../chunk-MDJ5SJNC.cjs');
require('../chunk-7YET3AMW.cjs');
require('../chunk-K6NWSQV7.cjs');
require('../chunk-4K7K6MSV.cjs');
require('../chunk-EDVEKMUS.cjs');
require('../chunk-CXDZSOSO.cjs');
require('../chunk-OFDQ7ET3.cjs');
require('../chunk-QVNJF4C2.cjs');
require('../chunk-LD3RCBGU.cjs');
require('../chunk-LQE4Q3OF.cjs');
require('../chunk-VFA3NO2G.cjs');
require('../chunk-GTFPLYO5.cjs');
require('../chunk-3ZQ4RWTP.cjs');

// src/__scripts__/generateDefaultConfig.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
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
    config: _chunk56GHHGNJcjs.appConfigSchema.parse(dummyConfig)
  },
  {
    path: baseTargetPath,
    config: _chunk56GHHGNJcjs.appConfigSchema.parse(physicsMathConfig)
  },
  {
    path: physicsMathPath,
    config: _chunk56GHHGNJcjs.appConfigSchema.parse(physicsMathConfig)
  },
  {
    path: _path2.default.join(
      __dirname,
      "../defaults/generatedDefaultConfigs/personal/appConfig.ulld.json"
    ),
    config: _chunk56GHHGNJcjs.appConfigSchema.parse(personalConfig)
  },
  {
    path: "/Users/bigsexy/dev-utils/ulld/appConfig.ulld.json",
    config: _chunk56GHHGNJcjs.appConfigSchema.parse(personalConfig)
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
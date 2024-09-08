'use strict';

var path = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path__default = /*#__PURE__*/_interopDefault(path);

// src/utils/build/additionalSourceFileStructure.ts
var fileItems = {
  style: [
    {
      subPath: "index.scss",
      rootGlob: "styles/**/*.scss",
      dirPath: "styles",
      validate: (items) => items.includes("styles/index.scss"),
      includeDirContents: true,
      getOutputPath: (filePath) => {
        return `src/styles/userProvided/${filePath.startsWith(`styles${path__default.default.sep}`) ? filePath.slice(`styles${path__default.default.sep}`.length) : filePath}`;
      }
    }
  ],
  public: [
    {
      subPath: "**",
      rootGlob: "public/**",
      dirPath: "public",
      getOutputPath: (filePath) => filePath,
      allowMultiple: true
    }
  ],
  root: [
    {
      subPath: "tailwind.config.ts",
      rootGlob: "tailwind.config.ts",
      getOutputPath: () => "tailwind.config.ts"
    },
    {
      subPath: "anyFilename.bib",
      globPath: "*.bib",
      rootGlob: "*.bib",
      getOutputPath: (filePath) => filePath
    },
    {
      subPath: "appConfig.ulld.json",
      globPath: "appConfig.ulld.json",
      rootGlob: "appConfig.ulld.json",
      getOutputPath: () => "appConfig.ulld.json"
    },
    {
      subPath: ".env",
      globPath: ".env",
      rootGlob: ".env",
      getOutputPath: () => ".env.local"
    },
    {
      subPath: "favicon.{ico,png,jpg}",
      rootGlob: "favicon.{ico,png,jpg}",
      getOutputPath: (filePath) => `public/${filePath}`
    }
  ]
};
var additionalFilePaths = {
  subPath: "/",
  items: [
    ...fileItems.root,
    {
      subPath: "styles",
      items: fileItems.style
    },
    {
      subPath: "public",
      items: [
        {
          subPath: "unreserved-public-dir",
          globPath: "<NOT_EXISTING_PUBLIC_DIR>",
          items: fileItems.public
        }
      ]
    }
  ]
};
var getFlattenedFileItems = () => {
  let data = [];
  for (const k in fileItems) {
    data = data.concat(fileItems[k]);
  }
  return data;
};

exports.additionalFilePaths = additionalFilePaths;
exports.fileItems = fileItems;
exports.getFlattenedFileItems = getFlattenedFileItems;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=additionalSourceFileStructure.cjs.map
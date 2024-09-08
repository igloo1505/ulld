import '../../chunk-F3FYYIAV.js';
import path from 'path';

var fileItems = {
  style: [
    {
      subPath: "index.scss",
      rootGlob: "styles/**/*.scss",
      dirPath: "styles",
      validate: (items) => items.includes("styles/index.scss"),
      includeDirContents: true,
      getOutputPath: (filePath) => {
        return `src/styles/userProvided/${filePath.startsWith(`styles${path.sep}`) ? filePath.slice(`styles${path.sep}`.length) : filePath}`;
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

export { additionalFilePaths, fileItems, getFlattenedFileItems };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=additionalSourceFileStructure.js.map
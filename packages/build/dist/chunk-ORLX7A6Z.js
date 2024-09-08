import {
  FileManager
} from "./chunk-ZUXBWQVK.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/baseApp/buildStaticData.ts
init_esm_shims();
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import buildData from "@ulld/utilities/buildStaticData.json";
var BuildStaticData = class {
  constructor(paths, build) {
    this.paths = paths;
    this.build = build;
  }
  settingPageData = [];
  transpilePackages = buildData.internalPackageNames;
  hasSet = {
    settingsData: false
  };
  setHasSetData(k, value = true) {
    this.hasSet[k] = value;
  }
  hasSetAll() {
    return Object.values(this.hasSet).every((a) => a);
  }
  getData() {
    if (!this.build.appConfig.config?.fsRoot) {
      throw new Error(`Cannot generate build output. No fsRoot property was defined in your configuration file.`);
    }
    let toTranspile = this.build.getPackagesToTranspile();
    this.transpilePackages = ArrayUtilities.concatWithoutDuplicates(this.transpilePackages, toTranspile);
    for (const item of toTranspile) {
      if (!this.transpilePackages.includes(item) && !(item.includes("sandbox") || item.includes("website"))) {
        this.transpilePackages.push(item);
      }
    }
    let data = {
      fsRoot: this.build.appConfig.config.fsRoot,
      navigationLinks: this.build.getFlatNavigationLinks(),
      componentDocs: this.build.getFlatComponentDocs(),
      settingPages: this.build.getFlatPluginSettingPages(),
      transpilePackages: this.transpilePackages,
      tailwindSources: this.build.getTailwindSources()
    };
    return data;
  }
  writeOutput() {
    let data = this.getData();
    let outputFile = FileManager.fromAbsolutePath(this.paths.joinPath("projectRoot", "ulldBuildData.json"), this.paths, false);
    outputFile.writeContent(JSON.stringify(data, null, 4));
  }
};

export {
  BuildStaticData
};
//# sourceMappingURL=chunk-ORLX7A6Z.js.map
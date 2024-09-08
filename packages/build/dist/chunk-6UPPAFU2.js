import {
  PluginAdditionalPage
} from "./chunk-S65FHSZB.js";
import {
  SubSlot
} from "./chunk-DTWPHC7P.js";
import {
  ShellManager
} from "./chunk-2NXHCBFZ.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/page.ts
init_esm_shims();
import slotStaticData from "@ulld/utilities/slotMap.json";
import buildData from "@ulld/utilities/buildStaticData.json";
var PluginPage = class extends ShellManager {
  constructor(data, pluginName, pageIndex, paths, parentSlotKey, subSlotKey) {
    super();
    this.data = data;
    this.pluginName = pluginName;
    this.pageIndex = pageIndex;
    this.paths = paths;
    this.parentSlotKey = parentSlotKey;
    this.subSlotKey = subSlotKey;
    if (data.slot && parentSlotKey) {
      this.slotData = slotStaticData[parentSlotKey]?.[data.slot];
    }
    if (this.parentSlotKey && this.subSlotKey) {
      this.subSlot = new SubSlot(this.pluginName, this.parentSlotKey, this.subSlotKey, this.paths);
    } else {
      this.additionalPage = new PluginAdditionalPage(this.pluginName, this.parentSlotKey, this.subSlotKey, this.paths);
    }
    this.formattedExport = `${this.pluginName}/${this.data.export}`;
    this.formattedComponentImport = this.getFormattedComponentImport();
    this.initialComponentImport = this.formattedComponentImport;
    this.targetUrl = this.getTargetUrl();
    let targetFile = this.getTargetFile();
    if (!targetFile) {
      this.throwTargetPathNotFound();
    }
    this.targetFile = targetFile;
  }
  shouldUse = true;
  importName = "GeneratedPageComponent";
  formattedImportName = "GeneratedPageComponent";
  slotData;
  targetUrl;
  targetFile;
  formattedComponentImport;
  formattedExport;
  haveModifiedImportName = false;
  subSlot;
  initialComponentImport;
  additionalPage;
  allowImportPageProps = false;
  cancel() {
    this.shouldUse = false;
  }
  getFormattedComponentImport() {
    return "PageComponent";
  }
  getImportString() {
    return `import ${this.importName}${this.data.exportsPageProps && this.allowImportPageProps ? ", { PageProps }" : ""} from "${this.pluginName}/${this.data.export}";`;
  }
  throwTargetPathNotFound() {
    throw new Error(
      `Could not find the target url for ${this.pluginName} at ${this.parentSlotKey} -> ${this.data.slot}`
    );
  }
  getTargetFile() {
    return this.slotData?.path || this.data.targetUrl;
  }
  getTargetUrl() {
    if (this.data.targetUrl) {
      return this.data.targetUrl;
    }
    if (!this.parentSlotKey || !this.subSlotKey) {
      this.throwTargetPathNotFound();
    }
    let protectedPathData = buildData.protectedPaths.find(
      (q) => q.pageFor.slot === this.parentSlotKey && q.pageFor.subSlot === this.subSlotKey
    );
    if (!protectedPathData) {
      this.throwTargetPathNotFound();
    }
    return protectedPathData?.route;
  }
  logWriteToFile() {
    if (this.parentSlotKey && this.subSlotKey) {
      this.logVerbose(`Writing ${this.parentSlotKey} -> ${this.subSlotKey} to file.`);
    } else {
      this.logVerbose(
        `Writing component from ${this.formattedExport} to file.`
      );
    }
  }
  writeToFile() {
    if (!this.shouldUse) {
      return this.log(
        `Not writing page ${this.targetUrl} from plugin ${this.pluginName}. There was an issue with their configuration.`
      );
    }
    if (this.subSlot) {
      this.logWriteToFile();
      this.subSlot.writeToFile(this.formattedExport, this.formattedComponentImport);
    } else if (this.additionalPage) {
      this.logWriteToFile();
      this.additionalPage.writeToFile(this.formattedExport, this.formattedComponentImport);
    }
  }
};

export {
  PluginPage
};
//# sourceMappingURL=chunk-6UPPAFU2.js.map
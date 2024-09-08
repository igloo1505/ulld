import {
  Path
} from "./chunk-K6K5LTLM.js";
import {
  SubSlot
} from "./chunk-DTWPHC7P.js";
import {
  ShellManager
} from "./chunk-2NXHCBFZ.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/component.ts
init_esm_shims();
import fs from "fs";
import { makeValidId } from "@ulld/utilities/identity";
var PluginComponent = class extends ShellManager {
  constructor(data, props, paths, packageJson) {
    super();
    this.data = data;
    this.paths = paths;
    this.packageJson = packageJson;
    if (props.parentSlot) {
      this.slotKey = props.parentSlot;
    }
    if (data.slot && props.parentSlot) {
      this.subSlot = new SubSlot(
        props.pluginName,
        props.parentSlot,
        data.slot,
        this.paths,
        this.data.exportedPropsName
      );
      this.subSlotKey = data.slot;
    }
    this.pluginName = props.pluginName;
    this.formattedExport = `${this.pluginName}/${this.data.export}`;
    this.formattedImportName = encodeURI(this.data.componentName);
    this.formattedComponentName = encodeURI(this.data.componentName);
    this.formattedPluginName = encodeURI(this.pluginName);
    this.initialComponentImport = `${this.data.componentName}`;
    this.inputFilePaths = {
      short: this.getInputFilePathOfType("short"),
      full: this.getInputFilePathOfType("full")
    };
    this.docsData = this.getDocsData();
  }
  subSlot;
  subSlotKey;
  slotKey;
  pluginName;
  formattedExport;
  formattedImportName;
  formattedComponentName;
  haveModifiedImportName = false;
  formattedPluginName;
  initialComponentImport;
  hasDocsData = false;
  docsData;
  inputFilePaths = {};
  getInputFilePathOfType(type) {
    let exportPath = type === "full" ? this.data.fullDocsExport : this.data.docsExport;
    if (!exportPath) {
      return void 0;
    }
    let subPath = this.packageJson.getSubPathByExport(exportPath);
    if (!subPath) {
      return void 0;
    }
    let inputPath = this.paths.getPathInNodeModule(this.pluginName, subPath);
    if (fs.existsSync(inputPath)) {
      this.hasDocsData = true;
      return inputPath;
    }
  }
  getOutputFilePath(type) {
    return `/generatedMarkdown/componentDocs/${type}/${makeValidId(this.initialComponentImport)}`;
  }
  getDocsData() {
    let embeddableSyntax = this.data.embeddable?.map((e) => e.regexToInclude) || [];
    let data = {
      pluginName: this.pluginName,
      componentName: this.formattedImportName,
      embeddableSyntax,
      componentId: this.data.componentId,
      urls: {
        short: this.data.docsExport ? `/componentDocs/${this.formattedPluginName}/${this.formattedComponentName}?full=false` : void 0,
        full: this.data.fullDocsExport ? `/componentDocs/${this.formattedPluginName}/${this.formattedComponentName}?full=true` : void 0
      },
      filePaths: {
        short: this.data.docsExport ? this.getOutputFilePath("short") : void 0,
        full: this.data.fullDocsExport ? this.getOutputFilePath("full") : void 0
      }
    };
    return data;
  }
  logWriteToFile() {
    if (this.slotKey && this.subSlotKey) {
      this.logVerbose(`Writing ${this.slotKey} -> ${this.subSlotKey} to file.`);
    } else {
      this.logVerbose(
        `Writing component from ${this.formattedExport} to file.`
      );
    }
  }
  writeToFile() {
    if (this.subSlot) {
      this.logWriteToFile();
      this.subSlot.writeToFile(
        this.formattedExport,
        this.formattedComponentName
      );
    } else {
      console.log(
        `No subslot found for ${this.initialComponentImport} in ${this.pluginName}`
      );
    }
  }
  copyDocsData() {
    if (!this.hasDocsData)
      return;
    if (this.inputFilePaths.full) {
      let inputPath = new Path(this.inputFilePaths.full);
      let outputPath = new Path(this.getOutputFilePath("full"));
      inputPath.copyContentTo(outputPath);
    }
    if (this.inputFilePaths.short) {
      let inputPath = new Path(this.inputFilePaths.short);
      let outputPath = new Path(this.getOutputFilePath("short"));
      inputPath.copyContentTo(outputPath);
    }
  }
};

export {
  PluginComponent
};
//# sourceMappingURL=chunk-2OIHOMQE.js.map
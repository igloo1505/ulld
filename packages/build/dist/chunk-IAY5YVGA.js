import {
  Prompter
} from "./chunk-NL3L2LIO.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/baseClasses/pkgJson.ts
init_esm_shims();
import path from "path";
import fs from "fs";
import { transformExportString } from "@ulld/utilities/transformExportString";
var PackageJson = class extends Prompter {
  constructor(applicationDir, targetDir, gitBranch) {
    super(applicationDir, gitBranch);
    this.applicationDir = applicationDir;
    this.path = path.join(targetDir || applicationDir, "package.json");
  }
  data;
  path;
  applyScript(newScript) {
    if (!this.data) {
      this.logError(
        `No package.json file found while attempting to write script`
      );
      throw new Error(
        "No package.json file found while attempting to write script"
      );
    }
    if ("scripts" in this.data) {
      this.data.scripts = {
        ...this.data.scripts,
        ...newScript
      };
    } else {
      this.data.scripts = newScript;
    }
    this.data.scripts;
  }
  getPackageManagerScripts(m) {
    return {
      postinstall: `${m} run db:generate`,
      prebuild: `${m} run db:generate`,
      predev: `${m} run db:generate`
    };
  }
  setPackageManagerScripts(m) {
    this.applyScript(this.getPackageManagerScripts(m));
  }
  gather() {
    if (fs.existsSync(this.path)) {
      let pkg = fs.readFileSync(this.path, { encoding: "utf-8" });
      this.data = JSON.parse(pkg);
    }
  }
  exists() {
    return fs.existsSync(this.path);
  }
  getData() {
    if (!this.data) {
      this.gather();
    }
    return this.data;
  }
  consistentlyFormatExport(exportString) {
    return transformExportString(exportString);
  }
  write(p) {
    this.log(`Writing your modified package.json...`);
    this.setPackageManagerScripts(p);
    fs.writeFileSync(this.path, JSON.stringify(this.data, null, 4), {
      encoding: "utf-8"
    });
    this.log(`Wrote modified package.json successfully.`);
  }
  getExports() {
    let data = [];
    let pData = this.getData();
    if (!pData)
      return data;
    for (const k in pData.exports) {
      data.push({
        export: k,
        transformedExport: transformExportString(k),
        subPath: pData.exports[k]
      });
    }
    return data;
  }
  getPluginConfig() {
    let data = this.getData();
    return data?.["ulld-pluginConfig"];
  }
  getSubPathByExport(exportKey) {
    let transformedExportKey = transformExportString(exportKey);
    let exports = this.getExports();
    let k = this.consistentlyFormatExport(exportKey);
    let foundExport = exports.find((f) => f.transformedExport === k);
    if (foundExport) {
      return transformExportString(foundExport.subPath);
    }
  }
};

export {
  PackageJson
};
//# sourceMappingURL=chunk-IAY5YVGA.js.map
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "../../chunk-JMDSN227.mjs";

// src/classes/path/main.ts
import path from "path";
import fs from "fs";
var _parsedData, _exists, _stats;
var Path = class {
  constructor(filePath) {
    this.filePath = filePath;
    __privateAdd(this, _parsedData, void 0);
    __privateAdd(this, _exists, void 0);
    __privateAdd(this, _stats, void 0);
  }
  get parsed() {
    if (__privateGet(this, _parsedData)) {
      return __privateGet(this, _parsedData);
    } else {
      let data = path.parse(this.filePath);
      __privateSet(this, _parsedData, data);
      return data;
    }
  }
  /** .../someDir/somePath.html -> somePath */
  fileName() {
    return this.parsed.name;
  }
  /** .../someDir/somePath.html -> .html */
  fileExtension() {
    return this.parsed.ext;
  }
  /** .../someDir/somePath.html -> somePath.html */
  fullName() {
    return this.parsed.base;
  }
  /** .../someDir/somePath.html -> .../someDir */
  dir() {
    return this.pathType() === "dir" ? this.filePath : this.parsed.dir;
  }
  exists({ forceNewRead, touchIfNotExists } = {}) {
    let doesExist = Boolean(!forceNewRead && typeof __privateGet(this, _exists) === "boolean") ? __privateGet(this, _exists) : fs.existsSync(this.filePath);
    if (!doesExist && touchIfNotExists) {
      return this.touch();
    }
    return doesExist;
  }
  mkdir() {
    let dirPath = this.dir();
    if (fs.existsSync(dirPath)) {
      console.log(`Dir already exists at ${dirPath}.`);
      return;
    }
    fs.mkdirSync(dirPath, {
      recursive: true
    });
  }
  touch() {
    this.mkdir();
    fs.closeSync(fs.openSync(this.filePath, "w"));
    return true;
  }
  get stats() {
    if (!this.exists()) {
      return false;
    }
    if (__privateGet(this, _stats)) {
      return __privateGet(this, _stats);
    }
    let data = fs.statSync(this.filePath);
    __privateSet(this, _stats, data);
    return data;
  }
  pathType() {
    if (!this.stats) {
      this.logNotExists();
      return false;
    }
    return this.stats.isFile() ? "file" : this.stats.isDirectory() ? "dir" : false;
  }
  logNotExists() {
    console.trace(`This file path does not exist. Cannot continue.`);
  }
};
_parsedData = new WeakMap();
_exists = new WeakMap();
_stats = new WeakMap();
export {
  Path
};
//# sourceMappingURL=main.mjs.map
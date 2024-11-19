"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var _chunkYOXHAKPLcjs = require('../../chunk-YOXHAKPL.cjs');

// src/classes/path/main.ts
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _parsedData, _exists, _stats;
var Path = class {
  constructor(filePath) {
    this.filePath = filePath;
    _chunkYOXHAKPLcjs.__privateAdd.call(void 0, this, _parsedData, void 0);
    _chunkYOXHAKPLcjs.__privateAdd.call(void 0, this, _exists, void 0);
    _chunkYOXHAKPLcjs.__privateAdd.call(void 0, this, _stats, void 0);
  }
  get parsed() {
    if (_chunkYOXHAKPLcjs.__privateGet.call(void 0, this, _parsedData)) {
      return _chunkYOXHAKPLcjs.__privateGet.call(void 0, this, _parsedData);
    } else {
      let data = _path2.default.parse(this.filePath);
      _chunkYOXHAKPLcjs.__privateSet.call(void 0, this, _parsedData, data);
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
    let doesExist = Boolean(!forceNewRead && typeof _chunkYOXHAKPLcjs.__privateGet.call(void 0, this, _exists) === "boolean") ? _chunkYOXHAKPLcjs.__privateGet.call(void 0, this, _exists) : _fs2.default.existsSync(this.filePath);
    if (!doesExist && touchIfNotExists) {
      return this.touch();
    }
    return doesExist;
  }
  mkdir() {
    let dirPath = this.dir();
    if (_fs2.default.existsSync(dirPath)) {
      console.log(`Dir already exists at ${dirPath}.`);
      return;
    }
    _fs2.default.mkdirSync(dirPath, {
      recursive: true
    });
  }
  touch() {
    this.mkdir();
    _fs2.default.closeSync(_fs2.default.openSync(this.filePath, "w"));
    return true;
  }
  get stats() {
    if (!this.exists()) {
      return false;
    }
    if (_chunkYOXHAKPLcjs.__privateGet.call(void 0, this, _stats)) {
      return _chunkYOXHAKPLcjs.__privateGet.call(void 0, this, _stats);
    }
    let data = _fs2.default.statSync(this.filePath);
    _chunkYOXHAKPLcjs.__privateSet.call(void 0, this, _stats, data);
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


exports.Path = Path;
//# sourceMappingURL=main.cjs.map
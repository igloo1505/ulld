'use strict';

var glob = require('glob');
var fs = require('fs');
var path = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var path__default = /*#__PURE__*/_interopDefault(path);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var FileData = class {
  constructor(path3, _isDir) {
    __publicField(this, "path");
    __publicField(this, "_isDir");
    __publicField(this, "dirname");
    __publicField(this, "content");
    this.path = path3;
    this._isDir = _isDir;
    this.dirname = this.getDirname(_isDir);
  }
  getFileName() {
    let s = path__default.default.basename(this.path).split(".");
    return s[0];
  }
  getExtension() {
    let s = path__default.default.basename(this.path).split(".");
    return `.${s[s.length - 1]}`;
  }
  getStat() {
    return fs__default.default.statSync(this.path);
  }
  isDir() {
    let s = this.getStat();
    return Boolean(s?.isDirectory());
  }
  getDirname(isDir) {
    let _isDir = typeof isDir === "boolean" ? isDir : this.isDir();
    if (_isDir) {
      return this.path;
    }
    try {
      return path__default.default.dirname(this.path);
    } catch (err) {
      console.error(`Could not get dirname. Path likely does not exist at ${this.path}`);
      return this.path;
    }
  }
  mkdirIfNotExists() {
    if (!fs__default.default.existsSync(this.dirname)) {
      fs__default.default.mkdirSync(this.dirname, { recursive: true });
    }
  }
  getContent() {
    if (this.content)
      return this.content;
    let data = fs__default.default.readFileSync(this.path, { encoding: "utf-8" });
    this.content = data;
    return data;
  }
  exists() {
    return fs__default.default.existsSync(this.path);
  }
  getLines() {
    return this.getContent().split("\n");
  }
  filterLines(cb) {
    let lines = this.getLines().filter((l) => cb(l));
    this.content = lines.join("\n");
  }
  getImportLines() {
    let lines = this.getLines();
    let lineData = [];
    lines.forEach((l, i) => {
      if (l.trim().startsWith("import")) {
        lineData.push({ content: l, index: i });
      }
    });
    return lineData;
  }
  throwIfNotExists() {
    let exists = this.exists();
    if (!exists) {
      throw new Error(`No file exists at ${this.path}. Aborting.`);
    }
  }
  getAsJson() {
    return JSON.parse(this.getContent());
  }
  writeContent(content) {
    let newContent = content || this.content;
    if (!newContent) {
      return console.error("Could not write file content as none was found.");
    }
    this.mkdirIfNotExists();
    fs__default.default.writeFileSync(this.path, newContent, { encoding: "utf-8" });
  }
};
var UlldGlob = class {
  constructor(fsRoot) {
    this.fsRoot = fsRoot;
  }
  /** Returns paths as absolute paths */
  glob(pattern, ignore = ["**node_modules**"], includeDirs = true) {
    return glob.globSync(pattern, {
      cwd: this.fsRoot,
      ignore,
      nodir: !includeDirs
    }).map((f) => path__default.default.join(this.fsRoot, f));
  }
  filePathsOfType(fileType) {
    return this.glob(`**/*.${fileType}`).map((f) => path__default.default.join(this.fsRoot, f));
  }
  filesOfType(fileType) {
    return this.filePathsOfType(fileType).map((f) => new FileData(f));
  }
};

exports.UlldGlob = UlldGlob;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map
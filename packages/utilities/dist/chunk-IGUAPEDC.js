import { __publicField } from './chunk-F3FYYIAV.js';
import fs from 'fs';
import path from 'path';

var FileData = class {
  constructor(path2, _isDir) {
    __publicField(this, "path");
    __publicField(this, "_isDir");
    __publicField(this, "dirname");
    __publicField(this, "content");
    this.path = path2;
    this._isDir = _isDir;
    this.dirname = this.getDirname(_isDir);
  }
  getFileName() {
    let s = path.basename(this.path).split(".");
    return s[0];
  }
  getExtension() {
    let s = path.basename(this.path).split(".");
    return `.${s[s.length - 1]}`;
  }
  getStat() {
    return fs.statSync(this.path);
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
      return path.dirname(this.path);
    } catch (err) {
      console.error(`Could not get dirname. Path likely does not exist at ${this.path}`);
      return this.path;
    }
  }
  mkdirIfNotExists() {
    if (!fs.existsSync(this.dirname)) {
      fs.mkdirSync(this.dirname, { recursive: true });
    }
  }
  getContent() {
    if (this.content)
      return this.content;
    let data = fs.readFileSync(this.path, { encoding: "utf-8" });
    this.content = data;
    return data;
  }
  exists() {
    return fs.existsSync(this.path);
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
    fs.writeFileSync(this.path, newContent, { encoding: "utf-8" });
  }
};

export { FileData };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-IGUAPEDC.js.map
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/utilityClasses/Path.ts
init_esm_shims();
import fs from "fs";
var Path = class {
  constructor(path) {
    this.path = path;
    this.exists = this.getExists();
  }
  exists;
  getExists() {
    let e = fs.existsSync(this.path);
    this.exists = e;
    return e;
  }
  readContent() {
    if (!this.exists)
      return;
    return fs.readFileSync(this.path, { encoding: "utf-8" });
  }
  readJson() {
    let content = this.readContent();
    if (content) {
      return JSON.parse(content);
    }
  }
  writeContent(newContent) {
    return fs.writeFileSync(this.path, newContent, { encoding: "utf-8" });
  }
  writeJson(newContent) {
    this.writeContent(JSON.stringify(newContent, null, 4));
  }
  copyContentTo(newPath) {
    let originalContent = this.readContent();
    if (originalContent) {
      newPath.writeContent(originalContent);
      return true;
    }
    return false;
  }
};

export {
  Path
};
//# sourceMappingURL=chunk-K6K5LTLM.js.map
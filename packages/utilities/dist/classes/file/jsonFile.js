import { FileData } from '../../chunk-IGUAPEDC.js';
import '../../chunk-F3FYYIAV.js';
import fs from 'fs';

var JsonFile = class extends FileData {
  constructor(path) {
    super(path, false);
    this.path = path;
  }
  getJsonContent() {
    this.throwIfNotExists();
    return JSON.parse(this.getContent());
  }
  writeContent(content, indentation = 2) {
    let newContent = content || this.content;
    if (!newContent) {
      throw new Error(`Cannot write content. No content was found.`);
    }
    if (typeof newContent === "object") {
      newContent = JSON.stringify(newContent, null, indentation);
    }
    fs.writeFileSync(this.path, newContent, { encoding: "utf-8" });
  }
};

export { JsonFile };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=jsonFile.js.map
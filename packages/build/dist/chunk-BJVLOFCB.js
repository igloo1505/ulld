import {
  TemplateFile
} from "./chunk-J55ZYSGO.js";
import {
  FileManager
} from "./chunk-ZUXBWQVK.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/noteType.ts
init_esm_shims();
var NoteType = class {
  constructor(data, paths) {
    this.data = data;
    this.paths = paths;
    this.noteTargetPaths = this.paths.getNoteTypePathsFromTargetUrl(this.data.url);
  }
  noteTargetPaths;
  writeNoteTypePage() {
    let f = new TemplateFile("noteTypePage");
    let content = f.getNewContent({
      CATEGORY_ID: this.data.id,
      BASE_URL: this.data.url
    });
    const fm = FileManager.fromAbsolutePath(this.noteTargetPaths.page, this.paths, false);
    fm.DO_NOT_WRITE_FILE_CONTENT = false;
    fm.writeContent(content);
  }
  writeIndividualNotePage() {
    let f = new TemplateFile("individualNotePage");
    let content = f.getNewContent({
      CATEGORY_ID: this.data.id
    });
    const fm = FileManager.fromAbsolutePath(this.noteTargetPaths.individualNotePage, this.paths, false);
    fm.DO_NOT_WRITE_FILE_CONTENT = false;
    fm.writeContent(content);
  }
  writePage() {
    this.writeNoteTypePage();
    this.writeIndividualNotePage();
  }
};

export {
  NoteType
};
//# sourceMappingURL=chunk-BJVLOFCB.js.map
import { TemplateFile } from "./templateFile.js";
import { FileManager } from "./baseClasses/fileManager.js";
export class NoteType {
    data;
    paths;
    noteTargetPaths;
    constructor(data, paths) {
        this.data = data;
        this.paths = paths;
        this.noteTargetPaths = this.paths.getNoteTypePathsFromTargetUrl(this.data.url);
    }
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
            CATEGORY_ID: this.data.id,
        });
        const fm = FileManager.fromAbsolutePath(this.noteTargetPaths.individualNotePage, this.paths, false);
        fm.DO_NOT_WRITE_FILE_CONTENT = false;
        fm.writeContent(content);
    }
    writePage() {
        this.writeNoteTypePage();
        this.writeIndividualNotePage();
    }
}

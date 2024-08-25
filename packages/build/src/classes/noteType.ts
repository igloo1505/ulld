import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { TargetPaths } from "./paths.js";
import { TemplateFile } from "./templateFile.js";
import { FileManager } from "./baseClasses/fileManager.js";

export class NoteType {
    noteTargetPaths: ReturnType<InstanceType<typeof TargetPaths>["getNoteTypePathsFromTargetUrl"]>
    constructor(public data: AppConfigSchemaOutput["noteTypes"][number], public paths: TargetPaths) { 
        this.noteTargetPaths = this.paths.getNoteTypePathsFromTargetUrl(this.data.url)
    }
    private writeNoteTypePage(){
        let f = new TemplateFile<"noteTypePage">("noteTypePage")
        let content = f.getNewContent({
            CATEGORY_ID: this.data.id,
            BASE_URL: this.data.url
        })
        const fm = FileManager.fromAbsolutePath(this.noteTargetPaths.page, this.paths, false)
        fm.DO_NOT_WRITE_FILE_CONTENT = false
        fm.writeContent(content)
    }
    private writeIndividualNotePage(){
        let f = new TemplateFile<"individualNotePage">("individualNotePage")
        let content = f.getNewContent({
            CATEGORY_ID: this.data.id,
        })
        const fm = FileManager.fromAbsolutePath(this.noteTargetPaths.individualNotePage, this.paths, false)
        fm.DO_NOT_WRITE_FILE_CONTENT = false
        fm.writeContent(content)
    }
    writePage() { 
        this.writeNoteTypePage()
        this.writeIndividualNotePage()
    }
}

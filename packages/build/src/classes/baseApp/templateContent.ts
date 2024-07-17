import { FileManager } from "../baseClasses/fileManager";
import { TargetPaths } from "../paths";

export class TemplateContent extends FileManager {
    constructor(public subPath: string, public paths: TargetPaths){
        super(subPath, paths)
    }
    removeREPLACEMEImport(){
       let re = /^import\s+REPLACEME/
        this.filterLines((l) => !re.test(l))
    }
    appendImport(importString: string){
        let importLines = this.getImportLines()
        let lastImportLine = importLines[importLines.length - 1]
        importLines.push({
            content: importString,
            index: lastImportLine.index,
            appendLine: true
        })
        this.replaceLinesByIndex(importLines)
    }
    replaceREPLACEME(componentName: string){
        this.content = this.content?.replaceAll("REPLACEME", componentName)
    }
}

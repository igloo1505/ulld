import { FileManager } from "../baseClasses/fileManager";
import { TargetPaths } from "../paths";

export class TemplateContent extends FileManager {
    replaceMeRegex: RegExp = /REPLACEME(\<[^\>]*>)?/gm
    constructor(public subPath: string, public paths: TargetPaths){
        super(subPath, paths)
    }
    removeREPLACEMEImport(){
       let re = /^import\s+REPLACEME/
        this.filterLines((l) => !re.test(l))
    }
    appendImport(importString: string){
        let importLines = this.getImportLines()
        let _importString = importString.trim()
        if(importLines.some((s) => s.content === _importString)){
            return
        }
        let lastImportLine = importLines[importLines.length - 1]
        importLines.push({
            content: importString,
            index: lastImportLine.index,
            appendLine: true
        })
        this.replaceLinesByIndex(importLines)
    }
    replaceREPLACEME(componentName: string){
        this.content = this.content?.replaceAll(this.replaceMeRegex, componentName)
    }
}

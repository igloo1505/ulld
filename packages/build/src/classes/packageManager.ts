import { FileData } from "@ulld/utilities/fileClass";
import { PackageManagers } from "../types.js";
import { TargetPaths } from "./paths.js";
import path from 'path'

export class PackageManager {
    constructor(public paths: TargetPaths, public type: PackageManagers) {}
    writeData(){
        console.log(`in write npmrc`)
        this.writeNpmrc()
    }
    private writeNpmrc(){
        let contentPath = path.join(import.meta.dirname, `../fileContent/npmrc/${this.type}.txt`)
        console.log("contentPath: ", contentPath)
        let f = new FileData(contentPath, false)
        if(f.exists()){
            let content = f.getContent()
            if(!content) return
            let outputFile = new FileData(this.paths.joinPath("projectRoot", ".npmrc"), false)
            console.log("outputFile: ", outputFile)
            outputFile.writeContent(content)
        }
    }
}

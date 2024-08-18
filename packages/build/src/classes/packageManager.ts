import { FileData } from "@ulld/utilities/fileClass";
import { PackageManagers } from "../types";
import { TargetPaths } from "./paths";
import path from 'path'

export class PackageManager {
    constructor(public paths: TargetPaths, public type: PackageManagers) {}
    writeData(){
        this.writeNpmrc()
    }
    private writeNpmrc(){
        let contentPath = path.join(__dirname, `../fileContent/npmrc/${this.type}.txt`)
        console.log("contentPath: ", contentPath)
        let f = new FileData(contentPath)
        if(f.exists()){
            let content = f.getContent()
            if(!content) return
            let outputFile = new FileData(this.paths.joinPath("projectRoot", ".npmrc"), false)
            console.log("outputFile: ", outputFile)
            outputFile.writeContent(content)
            console.log(`Wrote content`)
        }
    }
}

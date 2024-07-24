import { PackageManagers } from "../../types";
import { ShellManager } from "../baseClasses/shell";
import { TargetPaths } from "../paths";
import fs from 'fs'
import { globSync } from "glob";
import path from 'path'

export class BuildCleanup extends ShellManager {
    constructor(public paths: TargetPaths, public pkgManager: PackageManagers){
        super()
    }
    private removeTempBuildDir(){
        let filePaths = globSync("**", {
            cwd: this.paths.tempBuildFiles
        }).map((p) => path.join(this.paths.tempBuildFiles, p))
        for (const f of filePaths) {
           fs.rmSync(f, {
                force: true,
                recursive: true
            }) 
        }
        fs.rmdirSync(this.paths.tempBuildFiles)
    }
    private runOnBuild(){
        this.execPackageJsonScript(this.pkgManager, "runOnBuild", this.paths.projectRoot)
    }
    runCleanup(){
        this.runOnBuild()
        this.removeTempBuildDir()
    }
}

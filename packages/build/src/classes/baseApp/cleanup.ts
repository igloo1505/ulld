import fs from "fs";
import { globSync } from "glob";
import path from "path";
import { BuildOutputData, PackageManagers } from "../../types.js";
import { ShellManager } from "../baseClasses/shell.js";
import { TargetPaths } from "../paths.js";
import { JsonFile } from "@ulld/utilities/jsonFileClass";

export class BuildCleanup extends ShellManager {
    cleanupPaths: string[] = [".pre-commit-config.yaml"];
    constructor(
        public paths: TargetPaths,
        public pkgManager: PackageManagers,
    ) {
        super();
    }
    private removeTempBuildDir() {
        this.logVerbose(`Removing temp directory...`)
        let filePaths = globSync("**", {
            cwd: this.paths.tempBuildFiles,
            nodir: true
        }).map((p) => path.join(this.paths.tempBuildFiles, p));
        for (const f of filePaths) {
            fs.rmSync(f, {
                force: true,
                recursive: true,
            });
        }
        fs.rmdirSync(this.paths.tempBuildFiles);
    }
    private removePreCommitHooks() {
        this.logVerbose(`Removing commit hooks...`)
        let commitHookRoot = this.paths.joinPath("projectRoot", ".commitHooks");
        let files = globSync("**", {
            cwd: commitHookRoot,
            absolute: true,
            nodir: true
        })
        for (const f of files) {
            if(fs.existsSync(f)){
                fs.rmSync(f)
            } else {
                this.logDebug(`Attempted to delete a file that cannot be found: ${f}`)
            }
        }
        fs.rmdirSync(commitHookRoot);
    }
    private removeCleanupPaths(){
        this.logVerbose(`Removing build paths...`)
        for (const p of this.cleanupPaths) {
            let _path = this.paths.joinPath("projectRoot", p)
            if(fs.existsSync(_path)){
                fs.rmSync(_path)
            }
        }
    }
    getBuildOutputConfig(): BuildOutputData {
        return {
            buildOutputPath: this.paths.projectRoot
        }
    }

    private setBuildOutputPath(){
        this.paths.makeXdgConfigDir()
        let configPath = this.paths.xdgPaths.config()
        configPath = path.join(configPath, "buildData.json")
        let f = new JsonFile(configPath)
        let data = this.getBuildOutputConfig()
        f.writeContent(data)
        this.log("Set output path successfully. You can now run Ulld from anywhere using the ulldRun command.")
    }
    runCleanup() {
        this.removeTempBuildDir();
        this.removePreCommitHooks();
        this.removeCleanupPaths();
        this.setBuildOutputPath();
    }
}



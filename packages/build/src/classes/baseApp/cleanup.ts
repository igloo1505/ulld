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
        let filePaths = globSync("**", {
            cwd: this.paths.tempBuildFiles,
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
        let commitHookRoot = this.paths.joinPath("projectRoot", ".commitHooks");
        let files = globSync("**", {
            cwd: commitHookRoot,
        }).map((f) => path.join(commitHookRoot, f));
        for (const f of files) {
            fs.rmSync(f);
        }
        fs.rmdirSync(commitHookRoot);
    }
    private removeCleanupPaths(){
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
        let configPath = this.paths.xdgPaths.config()
        let f = new JsonFile(path.join(configPath, "buildData.json"))
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

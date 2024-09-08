import fs from "fs";
import { globSync } from "glob";
import path from "path";
import { ShellManager } from "../baseClasses/shell.js";
import { JsonFile } from "@ulld/utilities/jsonFileClass";
export class BuildCleanup extends ShellManager {
    paths;
    pkgManager;
    cleanupPaths = [".pre-commit-config.yaml"];
    constructor(paths, pkgManager) {
        super();
        this.paths = paths;
        this.pkgManager = pkgManager;
    }
    removeTempBuildDir() {
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
    removePreCommitHooks() {
        let commitHookRoot = this.paths.joinPath("projectRoot", ".commitHooks");
        let files = globSync("**", {
            cwd: commitHookRoot,
        }).map((f) => path.join(commitHookRoot, f));
        for (const f of files) {
            fs.rmSync(f);
        }
        fs.rmdirSync(commitHookRoot);
    }
    removeCleanupPaths() {
        for (const p of this.cleanupPaths) {
            let _path = this.paths.joinPath("projectRoot", p);
            if (fs.existsSync(_path)) {
                fs.rmSync(_path);
            }
        }
    }
    getBuildOutputConfig() {
        return {
            buildOutputPath: this.paths.projectRoot
        };
    }
    setBuildOutputPath() {
        let configPath = this.paths.xdgPaths.config();
        let f = new JsonFile(path.join(configPath, "buildData.json"));
        let data = this.getBuildOutputConfig();
        f.writeContent(data);
        this.log("Set output path successfully. You can now run Ulld from anywhere using the ulldRun command.");
    }
    runCleanup() {
        this.removeTempBuildDir();
        this.removePreCommitHooks();
        this.removeCleanupPaths();
        this.setBuildOutputPath();
    }
}

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
        this.logVerbose(`Removing temp directory...`);
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
    removePreCommitHooks() {
        this.logVerbose(`Removing commit hooks...`);
        let commitHookRoot = this.paths.joinPath("projectRoot", ".commitHooks");
        let files = globSync("**", {
            cwd: commitHookRoot,
            absolute: true,
            nodir: true
        });
        for (const f of files) {
            if (fs.existsSync(f)) {
                fs.rmSync(f);
            }
            else {
                this.logDebug(`Attempted to delete a file that cannot be found: ${f}`);
            }
        }
        fs.rmdirSync(commitHookRoot);
    }
    removeCleanupPaths() {
        this.logVerbose(`Removing build paths...`);
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
        this.paths.makeXdgConfigDir();
        let configPath = this.paths.xdgPaths.config();
        configPath = path.join(configPath, "buildData.json");
        let f = new JsonFile(configPath);
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

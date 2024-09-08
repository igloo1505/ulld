import {
  globSync
} from "./chunk-H3LLUEAM.js";
import {
  ShellManager
} from "./chunk-2NXHCBFZ.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/baseApp/cleanup.ts
init_esm_shims();
import fs from "fs";
import path from "path";
import { JsonFile } from "@ulld/utilities/jsonFileClass";
var BuildCleanup = class extends ShellManager {
  constructor(paths, pkgManager) {
    super();
    this.paths = paths;
    this.pkgManager = pkgManager;
  }
  cleanupPaths = [".pre-commit-config.yaml"];
  removeTempBuildDir() {
    let filePaths = globSync("**", {
      cwd: this.paths.tempBuildFiles
    }).map((p) => path.join(this.paths.tempBuildFiles, p));
    for (const f of filePaths) {
      fs.rmSync(f, {
        force: true,
        recursive: true
      });
    }
    fs.rmdirSync(this.paths.tempBuildFiles);
  }
  removePreCommitHooks() {
    let commitHookRoot = this.paths.joinPath("projectRoot", ".commitHooks");
    let files = globSync("**", {
      cwd: commitHookRoot
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
};

export {
  BuildCleanup
};
//# sourceMappingURL=chunk-FFLOCVP7.js.map
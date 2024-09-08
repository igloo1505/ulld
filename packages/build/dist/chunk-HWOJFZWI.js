import {
  PackageJson
} from "./chunk-IAY5YVGA.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/pkgJson.ts
init_esm_shims();
var TargetPackageJson = class extends PackageJson {
  constructor(targetDir, isLocalDev, baseAppGitBranch) {
    super(targetDir, void 0, baseAppGitBranch);
    this.targetDir = targetDir;
    this.isLocalDev = isLocalDev;
    this.baseAppGitBranch = baseAppGitBranch;
  }
  includesUlldDependencies() {
    if (!this.data) {
      return false;
    }
    let deps = Object.keys(this.data.dependencies);
    return deps.filter((a) => a.startsWith("@ulld")).length > 0;
  }
  write(p) {
    super.write(p);
  }
  // ULLD_BUILD_PROCESS: Need to handle this.
  // TODO: Need to handle this. Can't do shit without wifi right now.
  async installDependencies(forceLocalSource, providedPackageManager) {
    let manager = providedPackageManager ? providedPackageManager : await this.promptForPackageManager();
    if (!manager) {
      console.log(`Could not find a preferred package manager. Exiting.`);
      process.exit(1);
    }
    if (forceLocalSource) {
      this.logDebug(`Applying local sources for development build.`);
      this.exec(
        `ULLD_TEST_ROOT="${this.targetDir}" tsx /Users/bigsexy/Desktop/current/ulld/buildUtils/setClonedBaseAppInternalDepLocations.ts toLocal`
      );
    }
    this.log(`Downloading dependencies with ${manager}`);
    this.log(`This might take a minute... Now's the time to get some coffee.`);
    this.exec(`${manager} install`, this.targetDir);
    this.log(`Whew! Installed everything we need to wrap this up...`);
  }
};

export {
  TargetPackageJson
};
//# sourceMappingURL=chunk-HWOJFZWI.js.map
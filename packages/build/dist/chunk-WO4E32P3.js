import {
  writePackageManagerData
} from "./chunk-F4ZIEOCG.js";
import {
  getDevData
} from "./chunk-NQBOVBT2.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/stages/preModuleInstall.ts
init_esm_shims();
var installDependencies = async (build, options) => {
  let d = getDevData();
  await build.gatherPlugins();
  let packageManager = build.alreadyProvidedPackageManager ? build.packageManager : void 0;
  writePackageManagerData(build.paths, packageManager || "pnpm");
  !d.workingOffline && await build.packageJson.installDependencies(
    options.forceLocalSource,
    packageManager
  );
  build.revalidatePluginConfigs();
  await build.checkPluginValidity();
};

export {
  installDependencies
};
//# sourceMappingURL=chunk-WO4E32P3.js.map
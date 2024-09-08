import {
  PackageManager
} from "./chunk-244ZUQH4.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/stages/writePackageManagerData.ts
init_esm_shims();
var writePackageManagerData = (paths, type) => {
  console.log(`Writing package manager data`);
  let p = new PackageManager(paths, type);
  p.writeData();
  console.log(`Successfully wrote packageManagerData`);
};

export {
  writePackageManagerData
};
//# sourceMappingURL=chunk-F4ZIEOCG.js.map
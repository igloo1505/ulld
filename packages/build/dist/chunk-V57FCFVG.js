import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/utils/options.ts
init_esm_shims();
var optionMap = {
  useLocal: "--use-local",
  here: "--here",
  forceLocalSource: "--force-local-source",
  npm: "--npm",
  pnpm: "--pnpm",
  yarn: "--yarn",
  genDatabase: "--genDatabase",
  clean: "--clean"
};
var branchOptions = {
  main: "main",
  staticPrisma: "staticPrismaSchema",
  reactLatest: "updateReactAndNext"
};
var branchOptionValues = Object.values(branchOptions);
var stringOptionMap = {
  branch: "-b, --branch [branchName]"
};

export {
  optionMap,
  branchOptions,
  branchOptionValues,
  stringOptionMap
};
//# sourceMappingURL=chunk-V57FCFVG.js.map
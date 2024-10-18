import {
  appConfigDeepPartial
} from "./chunk-IEUGQ4K2.mjs";

// src/zod/refinedConfigs/minimalParsableConfig.ts
var minimalParsableAppConfig = appConfigDeepPartial.required({
  fsRoot: true,
  noteTypes: true
});
var appConfigDeepPartialWithNotetypes = appConfigDeepPartial.required({
  noteTypes: true
});
var appConfigDeepPartialWithFsRoot = appConfigDeepPartial.required({
  noteTypes: true
});

export {
  minimalParsableAppConfig,
  appConfigDeepPartialWithNotetypes,
  appConfigDeepPartialWithFsRoot
};
//# sourceMappingURL=chunk-E6H3ALJW.mjs.map
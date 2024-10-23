import {
  appConfigDeepPartial
} from "./chunk-3RN7VZZQ.mjs";

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
//# sourceMappingURL=chunk-SX3AGIV2.mjs.map
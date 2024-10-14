import {
  appConfigDeepPartial
} from "./chunk-WPDFOKEN.js";

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
//# sourceMappingURL=chunk-2P4FFZHG.js.map
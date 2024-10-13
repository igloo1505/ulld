import {
  appConfigDeepPartial
} from "./chunk-GV63OONA.js";

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
//# sourceMappingURL=chunk-TRA7BHE7.js.map
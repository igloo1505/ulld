import {
  appConfigOutputDeepPartialSchema
} from "./chunk-YYTTDPLU.mjs";

// src/zod/refinedConfigs/minimalParsableConfig.ts
var minimalParsableAppConfig = appConfigOutputDeepPartialSchema.required({
  fsRoot: true,
  noteTypes: true
});
var appConfigDeepPartialWithNotetypes = appConfigOutputDeepPartialSchema.required({
  noteTypes: true
});
var appConfigDeepPartialWithFsRoot = appConfigOutputDeepPartialSchema.required({
  noteTypes: true
});

export {
  minimalParsableAppConfig,
  appConfigDeepPartialWithNotetypes,
  appConfigDeepPartialWithFsRoot
};
//# sourceMappingURL=chunk-573SBUDP.mjs.map
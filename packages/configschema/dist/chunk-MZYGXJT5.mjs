import {
  appConfigOutputDeepPartialSchema
} from "./chunk-W4B6BITM.mjs";
import {
  documentTypeConfigMinimalOutputSchema
} from "./chunk-I62DW57C.mjs";

// src/zod/refinedConfigs/minimalParsableConfig.ts
import { z } from "zod";
var minimalParsableAppConfig = appConfigOutputDeepPartialSchema.required({
  fsRoot: true
}).merge(z.object({
  noteTypes: documentTypeConfigMinimalOutputSchema.array()
}));
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
//# sourceMappingURL=chunk-MZYGXJT5.mjs.map
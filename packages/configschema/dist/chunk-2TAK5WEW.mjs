import {
  appConfigOutputDeepPartialSchema
} from "./chunk-TMTAEBMD.mjs";
import {
  documentTypeConfigMinimalOutputSchema
} from "./chunk-DSCZCBFM.mjs";

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
//# sourceMappingURL=chunk-2TAK5WEW.mjs.map
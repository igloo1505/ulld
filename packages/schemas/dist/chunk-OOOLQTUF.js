import {
  NestedEnumautoSettingWithAggregatesFilterSchema
} from "./chunk-FTC2MIWQ.js";
import {
  NestedEnumautoSettingFilterSchema
} from "./chunk-TJEHP7LG.js";
import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";

// src/database/inputTypeSchemas/EnumautoSettingWithAggregatesFilterSchema.ts
import { z } from "zod";
var EnumautoSettingWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => autoSettingSchema).optional(),
  in: z.lazy(() => autoSettingSchema).array().optional(),
  notIn: z.lazy(() => autoSettingSchema).array().optional(),
  not: z.union([z.lazy(() => autoSettingSchema), z.lazy(() => NestedEnumautoSettingWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumautoSettingFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumautoSettingFilterSchema).optional()
}).strict();
var EnumautoSettingWithAggregatesFilterSchema_default = EnumautoSettingWithAggregatesFilterSchema;

export {
  EnumautoSettingWithAggregatesFilterSchema,
  EnumautoSettingWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-OOOLQTUF.js.map
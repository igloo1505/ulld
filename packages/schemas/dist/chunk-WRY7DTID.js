import {
  NestedEnumautoSettingWithAggregatesFilterSchema
} from "./chunk-MFJVHN5N.js";
import {
  NestedEnumautoSettingFilterSchema
} from "./chunk-XSBY72H2.js";
import {
  autoSettingSchema
} from "./chunk-EK76L66X.js";
import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";

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
//# sourceMappingURL=chunk-WRY7DTID.js.map
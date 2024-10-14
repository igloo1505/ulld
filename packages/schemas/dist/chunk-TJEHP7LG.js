import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";

// src/database/inputTypeSchemas/NestedEnumautoSettingFilterSchema.ts
import { z } from "zod";
var NestedEnumautoSettingFilterSchema = z.object({
  equals: z.lazy(() => autoSettingSchema).optional(),
  in: z.lazy(() => autoSettingSchema).array().optional(),
  notIn: z.lazy(() => autoSettingSchema).array().optional(),
  not: z.union([z.lazy(() => autoSettingSchema), z.lazy(() => NestedEnumautoSettingFilterSchema)]).optional()
}).strict();
var NestedEnumautoSettingFilterSchema_default = NestedEnumautoSettingFilterSchema;

export {
  NestedEnumautoSettingFilterSchema,
  NestedEnumautoSettingFilterSchema_default
};
//# sourceMappingURL=chunk-TJEHP7LG.js.map
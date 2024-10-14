import {
  NestedEnumautoSettingFilterSchema
} from "./chunk-TJEHP7LG.js";
import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";

// src/database/inputTypeSchemas/EnumautoSettingFilterSchema.ts
import { z } from "zod";
var EnumautoSettingFilterSchema = z.object({
  equals: z.lazy(() => autoSettingSchema).optional(),
  in: z.lazy(() => autoSettingSchema).array().optional(),
  notIn: z.lazy(() => autoSettingSchema).array().optional(),
  not: z.union([z.lazy(() => autoSettingSchema), z.lazy(() => NestedEnumautoSettingFilterSchema)]).optional()
}).strict();
var EnumautoSettingFilterSchema_default = EnumautoSettingFilterSchema;

export {
  EnumautoSettingFilterSchema,
  EnumautoSettingFilterSchema_default
};
//# sourceMappingURL=chunk-SIPHN6ID.js.map
import {
  HealthReportOrderByRelevanceFieldEnumSchema
} from "./chunk-TNMJBOEG.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/HealthReportOrderByRelevanceInputSchema.ts
import { z } from "zod";
var HealthReportOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => HealthReportOrderByRelevanceFieldEnumSchema), z.lazy(() => HealthReportOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var HealthReportOrderByRelevanceInputSchema_default = HealthReportOrderByRelevanceInputSchema;

export {
  HealthReportOrderByRelevanceInputSchema,
  HealthReportOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-BEQQFCFC.js.map
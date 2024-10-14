import {
  HealthReportOrderByRelevanceFieldEnumSchema
} from "./chunk-PFFRFP2G.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-GVRWVSTA.js.map
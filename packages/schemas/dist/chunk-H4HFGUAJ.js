import {
  TimePeriodOrderByRelevanceFieldEnumSchema
} from "./chunk-QFVMDCBU.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TimePeriodOrderByRelevanceInputSchema.ts
import { z } from "zod";
var TimePeriodOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => TimePeriodOrderByRelevanceFieldEnumSchema), z.lazy(() => TimePeriodOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var TimePeriodOrderByRelevanceInputSchema_default = TimePeriodOrderByRelevanceInputSchema;

export {
  TimePeriodOrderByRelevanceInputSchema,
  TimePeriodOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-H4HFGUAJ.js.map
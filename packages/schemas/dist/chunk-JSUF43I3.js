import {
  TimePeriodOrderByRelevanceFieldEnumSchema
} from "./chunk-5HEW6T74.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-JSUF43I3.js.map
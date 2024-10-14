import {
  DailyFocusOrderByRelevanceFieldEnumSchema
} from "./chunk-XWZHXI62.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DailyFocusOrderByRelevanceInputSchema.ts
import { z } from "zod";
var DailyFocusOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => DailyFocusOrderByRelevanceFieldEnumSchema), z.lazy(() => DailyFocusOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var DailyFocusOrderByRelevanceInputSchema_default = DailyFocusOrderByRelevanceInputSchema;

export {
  DailyFocusOrderByRelevanceInputSchema,
  DailyFocusOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-I5TSDRV3.js.map
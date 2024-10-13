import {
  DailyFocusOrderByRelevanceFieldEnumSchema
} from "./chunk-EGLKXLUP.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-XTRDHOIP.js.map
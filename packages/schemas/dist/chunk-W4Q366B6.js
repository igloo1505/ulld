import {
  DietOrderByRelevanceFieldEnumSchema
} from "./chunk-ZUIIQRAW.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DietOrderByRelevanceInputSchema.ts
import { z } from "zod";
var DietOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => DietOrderByRelevanceFieldEnumSchema), z.lazy(() => DietOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var DietOrderByRelevanceInputSchema_default = DietOrderByRelevanceInputSchema;

export {
  DietOrderByRelevanceInputSchema,
  DietOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-W4Q366B6.js.map
import {
  DietaryItemOrderByRelevanceFieldEnumSchema
} from "./chunk-36CO6JRE.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DietaryItemOrderByRelevanceInputSchema.ts
import { z } from "zod";
var DietaryItemOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => DietaryItemOrderByRelevanceFieldEnumSchema), z.lazy(() => DietaryItemOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var DietaryItemOrderByRelevanceInputSchema_default = DietaryItemOrderByRelevanceInputSchema;

export {
  DietaryItemOrderByRelevanceInputSchema,
  DietaryItemOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-F7YUFWZ6.js.map
import {
  DietaryItemOrderByRelevanceFieldEnumSchema
} from "./chunk-LYY54YMM.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-JUDGL6CY.js.map
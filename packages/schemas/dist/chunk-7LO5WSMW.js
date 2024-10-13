import {
  DietOrderByRelevanceFieldEnumSchema
} from "./chunk-SK6C2SH4.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-7LO5WSMW.js.map
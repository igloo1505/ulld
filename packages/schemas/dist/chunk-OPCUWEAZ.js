import {
  RandomImageOrderByRelevanceFieldEnumSchema
} from "./chunk-CXR26ZXO.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/RandomImageOrderByRelevanceInputSchema.ts
import { z } from "zod";
var RandomImageOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => RandomImageOrderByRelevanceFieldEnumSchema), z.lazy(() => RandomImageOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var RandomImageOrderByRelevanceInputSchema_default = RandomImageOrderByRelevanceInputSchema;

export {
  RandomImageOrderByRelevanceInputSchema,
  RandomImageOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-OPCUWEAZ.js.map
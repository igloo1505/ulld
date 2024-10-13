import {
  CitationsGroupOrderByRelevanceFieldEnumSchema
} from "./chunk-TNLLVTH4.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/CitationsGroupOrderByRelevanceInputSchema.ts
import { z } from "zod";
var CitationsGroupOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => CitationsGroupOrderByRelevanceFieldEnumSchema), z.lazy(() => CitationsGroupOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var CitationsGroupOrderByRelevanceInputSchema_default = CitationsGroupOrderByRelevanceInputSchema;

export {
  CitationsGroupOrderByRelevanceInputSchema,
  CitationsGroupOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-KYPAHG3X.js.map
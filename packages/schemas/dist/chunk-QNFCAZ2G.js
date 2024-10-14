import {
  CitationsGroupOrderByRelevanceFieldEnumSchema
} from "./chunk-UUJJHGRX.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-QNFCAZ2G.js.map
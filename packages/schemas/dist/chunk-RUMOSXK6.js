import {
  RandomImageOrderByRelevanceFieldEnumSchema
} from "./chunk-35CHNW2P.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-RUMOSXK6.js.map
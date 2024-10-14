import {
  BusinessContactOrderByRelevanceFieldEnumSchema
} from "./chunk-TPXEAHL6.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/BusinessContactOrderByRelevanceInputSchema.ts
import { z } from "zod";
var BusinessContactOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => BusinessContactOrderByRelevanceFieldEnumSchema), z.lazy(() => BusinessContactOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var BusinessContactOrderByRelevanceInputSchema_default = BusinessContactOrderByRelevanceInputSchema;

export {
  BusinessContactOrderByRelevanceInputSchema,
  BusinessContactOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-IXBV5ZV4.js.map
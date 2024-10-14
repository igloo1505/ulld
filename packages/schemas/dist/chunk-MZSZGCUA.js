import {
  ReadingListOrderByRelevanceFieldEnumSchema
} from "./chunk-QPRVPEZA.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ReadingListOrderByRelevanceInputSchema.ts
import { z } from "zod";
var ReadingListOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => ReadingListOrderByRelevanceFieldEnumSchema), z.lazy(() => ReadingListOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var ReadingListOrderByRelevanceInputSchema_default = ReadingListOrderByRelevanceInputSchema;

export {
  ReadingListOrderByRelevanceInputSchema,
  ReadingListOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-MZSZGCUA.js.map
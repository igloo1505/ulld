import {
  BibEntryOrderByRelevanceFieldEnumSchema
} from "./chunk-UIKGYNXB.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/BibEntryOrderByRelevanceInputSchema.ts
import { z } from "zod";
var BibEntryOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => BibEntryOrderByRelevanceFieldEnumSchema), z.lazy(() => BibEntryOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var BibEntryOrderByRelevanceInputSchema_default = BibEntryOrderByRelevanceInputSchema;

export {
  BibEntryOrderByRelevanceInputSchema,
  BibEntryOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-FBVZ5QEO.js.map
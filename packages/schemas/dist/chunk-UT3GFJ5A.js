import {
  BibEntryOrderByRelevanceFieldEnumSchema
} from "./chunk-EZHB2WPP.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-UT3GFJ5A.js.map
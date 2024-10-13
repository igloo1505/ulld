import {
  BibOrderByRelevanceFieldEnumSchema
} from "./chunk-LDOIL2KT.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/BibOrderByRelevanceInputSchema.ts
import { z } from "zod";
var BibOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => BibOrderByRelevanceFieldEnumSchema), z.lazy(() => BibOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var BibOrderByRelevanceInputSchema_default = BibOrderByRelevanceInputSchema;

export {
  BibOrderByRelevanceInputSchema,
  BibOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-HH3EE6Y5.js.map
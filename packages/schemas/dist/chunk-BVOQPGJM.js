import {
  BibOrderByRelevanceFieldEnumSchema
} from "./chunk-OLNJKVDG.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-BVOQPGJM.js.map
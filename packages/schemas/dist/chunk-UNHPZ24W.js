import {
  SnippetOrderByRelevanceFieldEnumSchema
} from "./chunk-L5Z3FWIR.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SnippetOrderByRelevanceInputSchema.ts
import { z } from "zod";
var SnippetOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => SnippetOrderByRelevanceFieldEnumSchema), z.lazy(() => SnippetOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var SnippetOrderByRelevanceInputSchema_default = SnippetOrderByRelevanceInputSchema;

export {
  SnippetOrderByRelevanceInputSchema,
  SnippetOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-UNHPZ24W.js.map
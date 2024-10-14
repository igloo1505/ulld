import {
  SnippetOrderByRelevanceFieldEnumSchema
} from "./chunk-25CTNZX7.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-GN5OA7TH.js.map
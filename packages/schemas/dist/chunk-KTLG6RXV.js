import {
  SnippetOrderByRelevanceInputSchema
} from "./chunk-GN5OA7TH.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SnippetOrderByWithRelationInputSchema.ts
import { z } from "zod";
var SnippetOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => SnippetOrderByRelevanceInputSchema).optional()
}).strict();
var SnippetOrderByWithRelationInputSchema_default = SnippetOrderByWithRelationInputSchema;

export {
  SnippetOrderByWithRelationInputSchema,
  SnippetOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-KTLG6RXV.js.map
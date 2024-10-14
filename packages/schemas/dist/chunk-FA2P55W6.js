import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SnippetMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var SnippetMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SnippetMaxOrderByAggregateInputSchema_default = SnippetMaxOrderByAggregateInputSchema;

export {
  SnippetMaxOrderByAggregateInputSchema,
  SnippetMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-FA2P55W6.js.map
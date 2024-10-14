import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SnippetCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var SnippetCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SnippetCountOrderByAggregateInputSchema_default = SnippetCountOrderByAggregateInputSchema;

export {
  SnippetCountOrderByAggregateInputSchema,
  SnippetCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-YUFIZTVF.js.map
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SnippetMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var SnippetMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SnippetMinOrderByAggregateInputSchema_default = SnippetMinOrderByAggregateInputSchema;

export {
  SnippetMinOrderByAggregateInputSchema,
  SnippetMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-KSDGRFGX.js.map
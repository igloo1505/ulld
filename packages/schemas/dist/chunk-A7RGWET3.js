import {
  SnippetMinOrderByAggregateInputSchema
} from "./chunk-KSDGRFGX.js";
import {
  SnippetMaxOrderByAggregateInputSchema
} from "./chunk-33DEBJZT.js";
import {
  SnippetCountOrderByAggregateInputSchema
} from "./chunk-LO7MUQJI.js";
import {
  SnippetAvgOrderByAggregateInputSchema
} from "./chunk-W3CZ32XV.js";
import {
  SnippetSumOrderByAggregateInputSchema
} from "./chunk-JD7KEW3J.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SnippetOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var SnippetOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SnippetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SnippetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SnippetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SnippetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SnippetSumOrderByAggregateInputSchema).optional()
}).strict();
var SnippetOrderByWithAggregationInputSchema_default = SnippetOrderByWithAggregationInputSchema;

export {
  SnippetOrderByWithAggregationInputSchema,
  SnippetOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-A7RGWET3.js.map
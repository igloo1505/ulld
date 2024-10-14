import {
  SnippetMinOrderByAggregateInputSchema
} from "./chunk-WCYYV7FO.js";
import {
  SnippetMaxOrderByAggregateInputSchema
} from "./chunk-FA2P55W6.js";
import {
  SnippetCountOrderByAggregateInputSchema
} from "./chunk-YUFIZTVF.js";
import {
  SnippetAvgOrderByAggregateInputSchema
} from "./chunk-I5NBYE37.js";
import {
  SnippetSumOrderByAggregateInputSchema
} from "./chunk-JBHYNDR6.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-VDTUH2U6.js.map
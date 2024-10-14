import {
  QuoteMinOrderByAggregateInputSchema
} from "./chunk-ROAR6PVN.js";
import {
  QuoteMaxOrderByAggregateInputSchema
} from "./chunk-BQSCWBE5.js";
import {
  QuoteCountOrderByAggregateInputSchema
} from "./chunk-JLN3IRW2.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/QuoteOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var QuoteOrderByWithAggregationInputSchema = z.object({
  body: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  source: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QuoteCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuoteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuoteMinOrderByAggregateInputSchema).optional()
}).strict();
var QuoteOrderByWithAggregationInputSchema_default = QuoteOrderByWithAggregationInputSchema;

export {
  QuoteOrderByWithAggregationInputSchema,
  QuoteOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-UWBRH4NV.js.map
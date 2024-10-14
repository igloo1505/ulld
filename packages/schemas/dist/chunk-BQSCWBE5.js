import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/QuoteMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var QuoteMaxOrderByAggregateInputSchema = z.object({
  body: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var QuoteMaxOrderByAggregateInputSchema_default = QuoteMaxOrderByAggregateInputSchema;

export {
  QuoteMaxOrderByAggregateInputSchema,
  QuoteMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-BQSCWBE5.js.map
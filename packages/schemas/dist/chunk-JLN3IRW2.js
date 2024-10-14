import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/QuoteCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var QuoteCountOrderByAggregateInputSchema = z.object({
  body: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var QuoteCountOrderByAggregateInputSchema_default = QuoteCountOrderByAggregateInputSchema;

export {
  QuoteCountOrderByAggregateInputSchema,
  QuoteCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-JLN3IRW2.js.map
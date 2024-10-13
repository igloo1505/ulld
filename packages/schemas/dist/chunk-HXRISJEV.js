import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/QuoteMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var QuoteMinOrderByAggregateInputSchema = z.object({
  body: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var QuoteMinOrderByAggregateInputSchema_default = QuoteMinOrderByAggregateInputSchema;

export {
  QuoteMinOrderByAggregateInputSchema,
  QuoteMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-HXRISJEV.js.map
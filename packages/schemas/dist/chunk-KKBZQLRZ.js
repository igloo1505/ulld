import {
  QuoteMinOrderByAggregateInputSchema
} from "./chunk-HXRISJEV.js";
import {
  QuoteMaxOrderByAggregateInputSchema
} from "./chunk-LER4W5HO.js";
import {
  QuoteCountOrderByAggregateInputSchema
} from "./chunk-JLMW3UJG.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-KKBZQLRZ.js.map
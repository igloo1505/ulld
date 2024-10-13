import {
  RandomImageMaxOrderByAggregateInputSchema
} from "./chunk-YO22NXZF.js";
import {
  RandomImageCountOrderByAggregateInputSchema
} from "./chunk-ARXEKZEU.js";
import {
  RandomImageMinOrderByAggregateInputSchema
} from "./chunk-3P3YZE53.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/RandomImageOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var RandomImageOrderByWithAggregationInputSchema = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RandomImageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RandomImageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RandomImageMinOrderByAggregateInputSchema).optional()
}).strict();
var RandomImageOrderByWithAggregationInputSchema_default = RandomImageOrderByWithAggregationInputSchema;

export {
  RandomImageOrderByWithAggregationInputSchema,
  RandomImageOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-VBWPTM6H.js.map
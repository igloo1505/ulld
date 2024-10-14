import {
  RandomImageMaxOrderByAggregateInputSchema
} from "./chunk-DGDNKKQN.js";
import {
  RandomImageCountOrderByAggregateInputSchema
} from "./chunk-OUVHBM4H.js";
import {
  RandomImageMinOrderByAggregateInputSchema
} from "./chunk-VANKR7CD.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-UPCOX25P.js.map
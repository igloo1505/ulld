import {
  DJTAvgOrderByAggregateInputSchema
} from "./chunk-5UVPKK3O.js";
import {
  DJTMinOrderByAggregateInputSchema
} from "./chunk-HTOM5DYC.js";
import {
  DJTMaxOrderByAggregateInputSchema
} from "./chunk-Q2GJGHF3.js";
import {
  DJTCountOrderByAggregateInputSchema
} from "./chunk-NORY5TDU.js";
import {
  DJTSumOrderByAggregateInputSchema
} from "./chunk-I3TP2IZR.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DJTOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var DJTOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DJTCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DJTAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DJTMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DJTMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DJTSumOrderByAggregateInputSchema).optional()
}).strict();
var DJTOrderByWithAggregationInputSchema_default = DJTOrderByWithAggregationInputSchema;

export {
  DJTOrderByWithAggregationInputSchema,
  DJTOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-AMQ4SFAL.js.map
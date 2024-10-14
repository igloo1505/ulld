import {
  DailyFocusMaxOrderByAggregateInputSchema
} from "./chunk-FCJOVNCF.js";
import {
  DailyFocusCountOrderByAggregateInputSchema
} from "./chunk-GMSEYRWP.js";
import {
  DailyFocusMinOrderByAggregateInputSchema
} from "./chunk-NQO72F5H.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DailyFocusOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var DailyFocusOrderByWithAggregationInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DailyFocusCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DailyFocusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DailyFocusMinOrderByAggregateInputSchema).optional()
}).strict();
var DailyFocusOrderByWithAggregationInputSchema_default = DailyFocusOrderByWithAggregationInputSchema;

export {
  DailyFocusOrderByWithAggregationInputSchema,
  DailyFocusOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-VU5CGNNI.js.map
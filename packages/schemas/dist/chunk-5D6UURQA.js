import {
  DJTAvgOrderByAggregateInputSchema
} from "./chunk-65WZXIVC.js";
import {
  DJTMinOrderByAggregateInputSchema
} from "./chunk-35QLIX2Y.js";
import {
  DJTMaxOrderByAggregateInputSchema
} from "./chunk-CPJYHWQY.js";
import {
  DJTCountOrderByAggregateInputSchema
} from "./chunk-XIIHLBLV.js";
import {
  DJTSumOrderByAggregateInputSchema
} from "./chunk-LPFU6N3Y.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-5D6UURQA.js.map
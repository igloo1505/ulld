import {
  FeatureRequestCountOrderByAggregateInputSchema
} from "./chunk-2Z5PX7BY.js";
import {
  FeatureRequestAvgOrderByAggregateInputSchema
} from "./chunk-IRHK37J3.js";
import {
  FeatureRequestMinOrderByAggregateInputSchema
} from "./chunk-QSPXSCOD.js";
import {
  FeatureRequestMaxOrderByAggregateInputSchema
} from "./chunk-RAOOB5TV.js";
import {
  FeatureRequestSumOrderByAggregateInputSchema
} from "./chunk-WEUQJ6RS.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/FeatureRequestOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var FeatureRequestOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  userBase: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FeatureRequestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FeatureRequestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FeatureRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FeatureRequestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FeatureRequestSumOrderByAggregateInputSchema).optional()
}).strict();
var FeatureRequestOrderByWithAggregationInputSchema_default = FeatureRequestOrderByWithAggregationInputSchema;

export {
  FeatureRequestOrderByWithAggregationInputSchema,
  FeatureRequestOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-2JPRO6D7.js.map
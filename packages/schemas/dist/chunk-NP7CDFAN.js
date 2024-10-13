import {
  FeatureRequestCountOrderByAggregateInputSchema
} from "./chunk-ETGUZF4Q.js";
import {
  FeatureRequestAvgOrderByAggregateInputSchema
} from "./chunk-KVAM5AU2.js";
import {
  FeatureRequestMinOrderByAggregateInputSchema
} from "./chunk-JWTFYRCE.js";
import {
  FeatureRequestMaxOrderByAggregateInputSchema
} from "./chunk-D37V2CRM.js";
import {
  FeatureRequestSumOrderByAggregateInputSchema
} from "./chunk-2VXMVNKW.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-NP7CDFAN.js.map
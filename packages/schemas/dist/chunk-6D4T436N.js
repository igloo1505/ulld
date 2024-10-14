import {
  RelatedValuesCountOrderByAggregateInputSchema
} from "./chunk-MNTCVBWA.js";
import {
  RelatedValuesAvgOrderByAggregateInputSchema
} from "./chunk-OFHZBKIP.js";
import {
  RelatedValuesMaxOrderByAggregateInputSchema
} from "./chunk-C6BFE3DG.js";
import {
  RelatedValuesMinOrderByAggregateInputSchema
} from "./chunk-LQ6Q6GGZ.js";
import {
  RelatedValuesSumOrderByAggregateInputSchema
} from "./chunk-RULB6RPK.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/RelatedValuesOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var RelatedValuesOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RelatedValuesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RelatedValuesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RelatedValuesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RelatedValuesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RelatedValuesSumOrderByAggregateInputSchema).optional()
}).strict();
var RelatedValuesOrderByWithAggregationInputSchema_default = RelatedValuesOrderByWithAggregationInputSchema;

export {
  RelatedValuesOrderByWithAggregationInputSchema,
  RelatedValuesOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-6D4T436N.js.map
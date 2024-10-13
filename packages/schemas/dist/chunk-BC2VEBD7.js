import {
  RelatedValuesCountOrderByAggregateInputSchema
} from "./chunk-G2O7KOGM.js";
import {
  RelatedValuesAvgOrderByAggregateInputSchema
} from "./chunk-P34I2H53.js";
import {
  RelatedValuesMaxOrderByAggregateInputSchema
} from "./chunk-POIWZFKL.js";
import {
  RelatedValuesMinOrderByAggregateInputSchema
} from "./chunk-DEKWXCLI.js";
import {
  RelatedValuesSumOrderByAggregateInputSchema
} from "./chunk-GIH6IBDF.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-BC2VEBD7.js.map
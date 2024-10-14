import {
  DietCountOrderByAggregateInputSchema
} from "./chunk-2SXW6OMG.js";
import {
  DietAvgOrderByAggregateInputSchema
} from "./chunk-GYMFLZB2.js";
import {
  DietMinOrderByAggregateInputSchema
} from "./chunk-HWJESGQY.js";
import {
  DietMaxOrderByAggregateInputSchema
} from "./chunk-HILPJEZV.js";
import {
  DietSumOrderByAggregateInputSchema
} from "./chunk-RXEFXJDR.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DietOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var DietOrderByWithAggregationInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  summary: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  activelyFollowing: z.lazy(() => SortOrderSchema).optional(),
  gf: z.lazy(() => SortOrderSchema).optional(),
  vegan: z.lazy(() => SortOrderSchema).optional(),
  pescatarian: z.lazy(() => SortOrderSchema).optional(),
  vegetarian: z.lazy(() => SortOrderSchema).optional(),
  fasting: z.lazy(() => SortOrderSchema).optional(),
  cardioTraining: z.lazy(() => SortOrderSchema).optional(),
  weightTraining: z.lazy(() => SortOrderSchema).optional(),
  carb: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  pro: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  fat: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  goals: z.lazy(() => SortOrderSchema).optional(),
  created: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DietCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DietAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DietMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DietMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DietSumOrderByAggregateInputSchema).optional()
}).strict();
var DietOrderByWithAggregationInputSchema_default = DietOrderByWithAggregationInputSchema;

export {
  DietOrderByWithAggregationInputSchema,
  DietOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-UPEVDFY2.js.map
import {
  DietaryItemAvgOrderByAggregateInputSchema
} from "./chunk-JWTC4VW3.js";
import {
  DietaryItemCountOrderByAggregateInputSchema
} from "./chunk-JRI5KBUA.js";
import {
  DietaryItemMinOrderByAggregateInputSchema
} from "./chunk-RWNBMCCE.js";
import {
  DietaryItemMaxOrderByAggregateInputSchema
} from "./chunk-PTQKKVI3.js";
import {
  DietaryItemSumOrderByAggregateInputSchema
} from "./chunk-A42HBXBV.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DietaryItemOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var DietaryItemOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  barcode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  gi: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  calsPerOz: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  glutenFree: z.lazy(() => SortOrderSchema).optional(),
  minimalFructose: z.lazy(() => SortOrderSchema).optional(),
  natural: z.lazy(() => SortOrderSchema).optional(),
  organic: z.lazy(() => SortOrderSchema).optional(),
  impactScore: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DietaryItemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DietaryItemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DietaryItemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DietaryItemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DietaryItemSumOrderByAggregateInputSchema).optional()
}).strict();
var DietaryItemOrderByWithAggregationInputSchema_default = DietaryItemOrderByWithAggregationInputSchema;

export {
  DietaryItemOrderByWithAggregationInputSchema,
  DietaryItemOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-XE7B6OIT.js.map
import {
  ServingCountOrderByAggregateInputSchema
} from "./chunk-NT4VUP4H.js";
import {
  ServingAvgOrderByAggregateInputSchema
} from "./chunk-XPZJEDSZ.js";
import {
  ServingMinOrderByAggregateInputSchema
} from "./chunk-HDNABXZA.js";
import {
  ServingMaxOrderByAggregateInputSchema
} from "./chunk-432TUKPI.js";
import {
  ServingSumOrderByAggregateInputSchema
} from "./chunk-JGKU56OJ.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ServingOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var ServingOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  quant_guess: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _count: z.lazy(() => ServingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ServingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ServingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ServingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ServingSumOrderByAggregateInputSchema).optional()
}).strict();
var ServingOrderByWithAggregationInputSchema_default = ServingOrderByWithAggregationInputSchema;

export {
  ServingOrderByWithAggregationInputSchema,
  ServingOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-ATZ75PAL.js.map
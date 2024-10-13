import {
  ServingCountOrderByAggregateInputSchema
} from "./chunk-FGVHK2FK.js";
import {
  ServingAvgOrderByAggregateInputSchema
} from "./chunk-HZJ5UDTU.js";
import {
  ServingMinOrderByAggregateInputSchema
} from "./chunk-QOLVJATE.js";
import {
  ServingMaxOrderByAggregateInputSchema
} from "./chunk-UHK6DHSS.js";
import {
  ServingSumOrderByAggregateInputSchema
} from "./chunk-QCG3WOAV.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-VNU44OUE.js.map
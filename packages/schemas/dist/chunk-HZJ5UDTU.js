import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ServingAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var ServingAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ServingAvgOrderByAggregateInputSchema_default = ServingAvgOrderByAggregateInputSchema;

export {
  ServingAvgOrderByAggregateInputSchema,
  ServingAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-HZJ5UDTU.js.map
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ServingSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var ServingSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ServingSumOrderByAggregateInputSchema_default = ServingSumOrderByAggregateInputSchema;

export {
  ServingSumOrderByAggregateInputSchema,
  ServingSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-JGKU56OJ.js.map
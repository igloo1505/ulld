import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ServingMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var ServingMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.lazy(() => SortOrderSchema).optional(),
  quant_guess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ServingMaxOrderByAggregateInputSchema_default = ServingMaxOrderByAggregateInputSchema;

export {
  ServingMaxOrderByAggregateInputSchema,
  ServingMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-432TUKPI.js.map
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ServingMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var ServingMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.lazy(() => SortOrderSchema).optional(),
  quant_guess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ServingMinOrderByAggregateInputSchema_default = ServingMinOrderByAggregateInputSchema;

export {
  ServingMinOrderByAggregateInputSchema,
  ServingMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-HDNABXZA.js.map
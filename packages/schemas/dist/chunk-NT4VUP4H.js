import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ServingCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var ServingCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.lazy(() => SortOrderSchema).optional(),
  quant_guess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ServingCountOrderByAggregateInputSchema_default = ServingCountOrderByAggregateInputSchema;

export {
  ServingCountOrderByAggregateInputSchema,
  ServingCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-NT4VUP4H.js.map
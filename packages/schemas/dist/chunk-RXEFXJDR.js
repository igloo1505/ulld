import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DietSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var DietSumOrderByAggregateInputSchema = z.object({
  carb: z.lazy(() => SortOrderSchema).optional(),
  pro: z.lazy(() => SortOrderSchema).optional(),
  fat: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DietSumOrderByAggregateInputSchema_default = DietSumOrderByAggregateInputSchema;

export {
  DietSumOrderByAggregateInputSchema,
  DietSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-RXEFXJDR.js.map
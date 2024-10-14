import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DietaryItemSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var DietaryItemSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gi: z.lazy(() => SortOrderSchema).optional(),
  calsPerOz: z.lazy(() => SortOrderSchema).optional(),
  impactScore: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DietaryItemSumOrderByAggregateInputSchema_default = DietaryItemSumOrderByAggregateInputSchema;

export {
  DietaryItemSumOrderByAggregateInputSchema,
  DietaryItemSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-TADXQLRT.js.map
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DailyFocusMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var DailyFocusMaxOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DailyFocusMaxOrderByAggregateInputSchema_default = DailyFocusMaxOrderByAggregateInputSchema;

export {
  DailyFocusMaxOrderByAggregateInputSchema,
  DailyFocusMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-FCJOVNCF.js.map
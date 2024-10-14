import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DailyFocusMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var DailyFocusMinOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DailyFocusMinOrderByAggregateInputSchema_default = DailyFocusMinOrderByAggregateInputSchema;

export {
  DailyFocusMinOrderByAggregateInputSchema,
  DailyFocusMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-NQO72F5H.js.map
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TimePeriodMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var TimePeriodMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  dietId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TimePeriodMaxOrderByAggregateInputSchema_default = TimePeriodMaxOrderByAggregateInputSchema;

export {
  TimePeriodMaxOrderByAggregateInputSchema,
  TimePeriodMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-U6WOA3WM.js.map
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TimePeriodCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var TimePeriodCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  dietId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TimePeriodCountOrderByAggregateInputSchema_default = TimePeriodCountOrderByAggregateInputSchema;

export {
  TimePeriodCountOrderByAggregateInputSchema,
  TimePeriodCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-O7DVKYKQ.js.map
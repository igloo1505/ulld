import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TimePeriodMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var TimePeriodMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  dietId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TimePeriodMinOrderByAggregateInputSchema_default = TimePeriodMinOrderByAggregateInputSchema;

export {
  TimePeriodMinOrderByAggregateInputSchema,
  TimePeriodMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-ZABFI5VM.js.map
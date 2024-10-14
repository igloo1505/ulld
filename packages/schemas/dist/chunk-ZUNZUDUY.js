import {
  TimePeriodCountOrderByAggregateInputSchema
} from "./chunk-O7DVKYKQ.js";
import {
  TimePeriodAvgOrderByAggregateInputSchema
} from "./chunk-4QW2UY7H.js";
import {
  TimePeriodMinOrderByAggregateInputSchema
} from "./chunk-ZABFI5VM.js";
import {
  TimePeriodMaxOrderByAggregateInputSchema
} from "./chunk-U6WOA3WM.js";
import {
  TimePeriodSumOrderByAggregateInputSchema
} from "./chunk-N5NW7XLM.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TimePeriodOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var TimePeriodOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  dietId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _count: z.lazy(() => TimePeriodCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TimePeriodAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TimePeriodMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TimePeriodMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TimePeriodSumOrderByAggregateInputSchema).optional()
}).strict();
var TimePeriodOrderByWithAggregationInputSchema_default = TimePeriodOrderByWithAggregationInputSchema;

export {
  TimePeriodOrderByWithAggregationInputSchema,
  TimePeriodOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-ZUNZUDUY.js.map
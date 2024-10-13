import {
  TimePeriodCountOrderByAggregateInputSchema
} from "./chunk-GPHGE3HM.js";
import {
  TimePeriodAvgOrderByAggregateInputSchema
} from "./chunk-TC4M4BLY.js";
import {
  TimePeriodMinOrderByAggregateInputSchema
} from "./chunk-DMF5VOA5.js";
import {
  TimePeriodMaxOrderByAggregateInputSchema
} from "./chunk-44WWU4TD.js";
import {
  TimePeriodSumOrderByAggregateInputSchema
} from "./chunk-M4FPDTVO.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-K7W7IUBM.js.map
import {
  WaitlistRequestMinOrderByAggregateInputSchema
} from "./chunk-HTWYC4PM.js";
import {
  WaitlistRequestMaxOrderByAggregateInputSchema
} from "./chunk-LVZIGJUM.js";
import {
  WaitlistRequestCountOrderByAggregateInputSchema
} from "./chunk-ZCUNJWFY.js";
import {
  WaitlistRequestAvgOrderByAggregateInputSchema
} from "./chunk-NMR33OCF.js";
import {
  WaitlistRequestSumOrderByAggregateInputSchema
} from "./chunk-2ZAFDCGU.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/WaitlistRequestOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var WaitlistRequestOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WaitlistRequestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WaitlistRequestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WaitlistRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WaitlistRequestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WaitlistRequestSumOrderByAggregateInputSchema).optional()
}).strict();
var WaitlistRequestOrderByWithAggregationInputSchema_default = WaitlistRequestOrderByWithAggregationInputSchema;

export {
  WaitlistRequestOrderByWithAggregationInputSchema,
  WaitlistRequestOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-KFARIGIE.js.map
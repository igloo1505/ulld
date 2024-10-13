import {
  WaitlistRequestMinOrderByAggregateInputSchema
} from "./chunk-FIH3TE36.js";
import {
  WaitlistRequestMaxOrderByAggregateInputSchema
} from "./chunk-23HIQM7W.js";
import {
  WaitlistRequestCountOrderByAggregateInputSchema
} from "./chunk-OQTAJHOQ.js";
import {
  WaitlistRequestAvgOrderByAggregateInputSchema
} from "./chunk-6WA7EIAW.js";
import {
  WaitlistRequestSumOrderByAggregateInputSchema
} from "./chunk-ZUFXDXAT.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-CEV4B2ML.js.map
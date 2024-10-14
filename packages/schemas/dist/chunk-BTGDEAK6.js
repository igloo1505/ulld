import {
  BusinessContactMinOrderByAggregateInputSchema
} from "./chunk-5YBBGFZC.js";
import {
  BusinessContactMaxOrderByAggregateInputSchema
} from "./chunk-7RYYTJYN.js";
import {
  BusinessContactCountOrderByAggregateInputSchema
} from "./chunk-5CD5RSJD.js";
import {
  BusinessContactAvgOrderByAggregateInputSchema
} from "./chunk-FVLHONU2.js";
import {
  BusinessContactSumOrderByAggregateInputSchema
} from "./chunk-MKKIZ4KD.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/BusinessContactOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var BusinessContactOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  contactName: z.lazy(() => SortOrderSchema).optional(),
  contactPreference: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  phone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  purpose: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _count: z.lazy(() => BusinessContactCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BusinessContactAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BusinessContactMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BusinessContactMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BusinessContactSumOrderByAggregateInputSchema).optional()
}).strict();
var BusinessContactOrderByWithAggregationInputSchema_default = BusinessContactOrderByWithAggregationInputSchema;

export {
  BusinessContactOrderByWithAggregationInputSchema,
  BusinessContactOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-BTGDEAK6.js.map
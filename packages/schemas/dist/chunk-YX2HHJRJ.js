import {
  BusinessContactMinOrderByAggregateInputSchema
} from "./chunk-52SPPFGW.js";
import {
  BusinessContactMaxOrderByAggregateInputSchema
} from "./chunk-PBAUAFKH.js";
import {
  BusinessContactCountOrderByAggregateInputSchema
} from "./chunk-V652DOP5.js";
import {
  BusinessContactAvgOrderByAggregateInputSchema
} from "./chunk-BYZ6ITU3.js";
import {
  BusinessContactSumOrderByAggregateInputSchema
} from "./chunk-OVYMQEUD.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-YX2HHJRJ.js.map
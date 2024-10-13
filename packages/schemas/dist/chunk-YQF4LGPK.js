import {
  GoogleCalendarAuthMinOrderByAggregateInputSchema
} from "./chunk-POA2VJBP.js";
import {
  GoogleCalendarAuthMaxOrderByAggregateInputSchema
} from "./chunk-EKHQSA2F.js";
import {
  GoogleCalendarAuthCountOrderByAggregateInputSchema
} from "./chunk-WY5QZ3GT.js";
import {
  GoogleCalendarAuthAvgOrderByAggregateInputSchema
} from "./chunk-64ASPBQL.js";
import {
  GoogleCalendarAuthSumOrderByAggregateInputSchema
} from "./chunk-MTWP2PXE.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  auth: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _count: z.lazy(() => GoogleCalendarAuthCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GoogleCalendarAuthAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GoogleCalendarAuthMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GoogleCalendarAuthMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GoogleCalendarAuthSumOrderByAggregateInputSchema).optional()
}).strict();
var GoogleCalendarAuthOrderByWithAggregationInputSchema_default = GoogleCalendarAuthOrderByWithAggregationInputSchema;

export {
  GoogleCalendarAuthOrderByWithAggregationInputSchema,
  GoogleCalendarAuthOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-YQF4LGPK.js.map
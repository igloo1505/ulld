import {
  GoogleCalendarAuthMinOrderByAggregateInputSchema
} from "./chunk-RYECTYUV.js";
import {
  GoogleCalendarAuthMaxOrderByAggregateInputSchema
} from "./chunk-PSRMZU5V.js";
import {
  GoogleCalendarAuthCountOrderByAggregateInputSchema
} from "./chunk-L2V3RPZ6.js";
import {
  GoogleCalendarAuthAvgOrderByAggregateInputSchema
} from "./chunk-CNXIVBN4.js";
import {
  GoogleCalendarAuthSumOrderByAggregateInputSchema
} from "./chunk-Q6OQRGMD.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-QQRVD7JN.js.map
import {
  DailyFocusMaxOrderByAggregateInputSchema
} from "./chunk-B2XB6DWF.js";
import {
  DailyFocusCountOrderByAggregateInputSchema
} from "./chunk-AHNAZ2HZ.js";
import {
  DailyFocusMinOrderByAggregateInputSchema
} from "./chunk-GWBHNOAB.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DailyFocusOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var DailyFocusOrderByWithAggregationInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DailyFocusCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DailyFocusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DailyFocusMinOrderByAggregateInputSchema).optional()
}).strict();
var DailyFocusOrderByWithAggregationInputSchema_default = DailyFocusOrderByWithAggregationInputSchema;

export {
  DailyFocusOrderByWithAggregationInputSchema,
  DailyFocusOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-ROY4KJH3.js.map
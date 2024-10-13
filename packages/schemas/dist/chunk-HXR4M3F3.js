import {
  AutoSettingCountOrderByAggregateInputSchema
} from "./chunk-6MO74H3Z.js";
import {
  AutoSettingAvgOrderByAggregateInputSchema
} from "./chunk-CXYWNBBS.js";
import {
  AutoSettingMinOrderByAggregateInputSchema
} from "./chunk-F5V4OZPQ.js";
import {
  AutoSettingMaxOrderByAggregateInputSchema
} from "./chunk-V53A43YT.js";
import {
  AutoSettingSumOrderByAggregateInputSchema
} from "./chunk-NIB26RFL.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/AutoSettingOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var AutoSettingOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  glob: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AutoSettingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AutoSettingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AutoSettingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AutoSettingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AutoSettingSumOrderByAggregateInputSchema).optional()
}).strict();
var AutoSettingOrderByWithAggregationInputSchema_default = AutoSettingOrderByWithAggregationInputSchema;

export {
  AutoSettingOrderByWithAggregationInputSchema,
  AutoSettingOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-HXR4M3F3.js.map
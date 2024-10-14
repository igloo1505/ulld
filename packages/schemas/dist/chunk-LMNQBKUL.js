import {
  AutoSettingCountOrderByAggregateInputSchema
} from "./chunk-TLPSOUVD.js";
import {
  AutoSettingAvgOrderByAggregateInputSchema
} from "./chunk-YLXEIML2.js";
import {
  AutoSettingMinOrderByAggregateInputSchema
} from "./chunk-3R3DZAKT.js";
import {
  AutoSettingMaxOrderByAggregateInputSchema
} from "./chunk-MH6XZSFV.js";
import {
  AutoSettingSumOrderByAggregateInputSchema
} from "./chunk-TV62REGH.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-LMNQBKUL.js.map
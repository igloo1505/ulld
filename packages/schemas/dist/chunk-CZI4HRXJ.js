import {
  SettingsAppendixMinOrderByAggregateInputSchema
} from "./chunk-QOF5WKKZ.js";
import {
  SettingsAppendixMaxOrderByAggregateInputSchema
} from "./chunk-GB6GMCA4.js";
import {
  SettingsAppendixCountOrderByAggregateInputSchema
} from "./chunk-KSN45ZHF.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SettingsAppendixOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var SettingsAppendixOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SettingsAppendixCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SettingsAppendixMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SettingsAppendixMinOrderByAggregateInputSchema).optional()
}).strict();
var SettingsAppendixOrderByWithAggregationInputSchema_default = SettingsAppendixOrderByWithAggregationInputSchema;

export {
  SettingsAppendixOrderByWithAggregationInputSchema,
  SettingsAppendixOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-CZI4HRXJ.js.map
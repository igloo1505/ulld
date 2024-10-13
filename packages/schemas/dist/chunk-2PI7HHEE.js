import {
  SettingsAppendixMinOrderByAggregateInputSchema
} from "./chunk-YCRZZXJB.js";
import {
  SettingsAppendixMaxOrderByAggregateInputSchema
} from "./chunk-TKFLW64I.js";
import {
  SettingsAppendixCountOrderByAggregateInputSchema
} from "./chunk-AAPJWIL3.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-2PI7HHEE.js.map
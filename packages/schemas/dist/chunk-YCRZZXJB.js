import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SettingsAppendixMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var SettingsAppendixMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SettingsAppendixMinOrderByAggregateInputSchema_default = SettingsAppendixMinOrderByAggregateInputSchema;

export {
  SettingsAppendixMinOrderByAggregateInputSchema,
  SettingsAppendixMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-YCRZZXJB.js.map
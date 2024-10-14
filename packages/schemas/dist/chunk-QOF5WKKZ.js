import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-QOF5WKKZ.js.map
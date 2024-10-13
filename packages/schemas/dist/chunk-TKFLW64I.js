import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SettingsAppendixMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var SettingsAppendixMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SettingsAppendixMaxOrderByAggregateInputSchema_default = SettingsAppendixMaxOrderByAggregateInputSchema;

export {
  SettingsAppendixMaxOrderByAggregateInputSchema,
  SettingsAppendixMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-TKFLW64I.js.map
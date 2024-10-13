import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SettingsAppendixCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var SettingsAppendixCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SettingsAppendixCountOrderByAggregateInputSchema_default = SettingsAppendixCountOrderByAggregateInputSchema;

export {
  SettingsAppendixCountOrderByAggregateInputSchema,
  SettingsAppendixCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-AAPJWIL3.js.map
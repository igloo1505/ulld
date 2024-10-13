import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DailyFocusMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var DailyFocusMaxOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DailyFocusMaxOrderByAggregateInputSchema_default = DailyFocusMaxOrderByAggregateInputSchema;

export {
  DailyFocusMaxOrderByAggregateInputSchema,
  DailyFocusMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-B2XB6DWF.js.map
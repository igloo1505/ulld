import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DailyFocusMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var DailyFocusMinOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DailyFocusMinOrderByAggregateInputSchema_default = DailyFocusMinOrderByAggregateInputSchema;

export {
  DailyFocusMinOrderByAggregateInputSchema,
  DailyFocusMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-GWBHNOAB.js.map
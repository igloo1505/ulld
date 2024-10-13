import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DailyFocusCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var DailyFocusCountOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DailyFocusCountOrderByAggregateInputSchema_default = DailyFocusCountOrderByAggregateInputSchema;

export {
  DailyFocusCountOrderByAggregateInputSchema,
  DailyFocusCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-AHNAZ2HZ.js.map
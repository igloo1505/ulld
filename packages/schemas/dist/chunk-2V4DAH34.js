import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DietAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var DietAvgOrderByAggregateInputSchema = z.object({
  carb: z.lazy(() => SortOrderSchema).optional(),
  pro: z.lazy(() => SortOrderSchema).optional(),
  fat: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DietAvgOrderByAggregateInputSchema_default = DietAvgOrderByAggregateInputSchema;

export {
  DietAvgOrderByAggregateInputSchema,
  DietAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-2V4DAH34.js.map
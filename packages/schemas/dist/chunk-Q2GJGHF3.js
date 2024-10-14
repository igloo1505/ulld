import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DJTMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var DJTMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DJTMaxOrderByAggregateInputSchema_default = DJTMaxOrderByAggregateInputSchema;

export {
  DJTMaxOrderByAggregateInputSchema,
  DJTMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-Q2GJGHF3.js.map
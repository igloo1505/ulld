import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DJTMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var DJTMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DJTMinOrderByAggregateInputSchema_default = DJTMinOrderByAggregateInputSchema;

export {
  DJTMinOrderByAggregateInputSchema,
  DJTMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-HTOM5DYC.js.map
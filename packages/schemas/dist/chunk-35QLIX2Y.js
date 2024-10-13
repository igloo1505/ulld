import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-35QLIX2Y.js.map
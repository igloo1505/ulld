import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DJTCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var DJTCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DJTCountOrderByAggregateInputSchema_default = DJTCountOrderByAggregateInputSchema;

export {
  DJTCountOrderByAggregateInputSchema,
  DJTCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-NORY5TDU.js.map
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-CPJYHWQY.js.map
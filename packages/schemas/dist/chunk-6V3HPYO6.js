import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ToDoListMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var ToDoListMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ToDoListMinOrderByAggregateInputSchema_default = ToDoListMinOrderByAggregateInputSchema;

export {
  ToDoListMinOrderByAggregateInputSchema,
  ToDoListMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-6V3HPYO6.js.map
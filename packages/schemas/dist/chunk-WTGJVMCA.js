import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ToDoListMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var ToDoListMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ToDoListMaxOrderByAggregateInputSchema_default = ToDoListMaxOrderByAggregateInputSchema;

export {
  ToDoListMaxOrderByAggregateInputSchema,
  ToDoListMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-WTGJVMCA.js.map
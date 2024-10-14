import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ToDoSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var ToDoSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  toDoListId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ToDoSumOrderByAggregateInputSchema_default = ToDoSumOrderByAggregateInputSchema;

export {
  ToDoSumOrderByAggregateInputSchema,
  ToDoSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-EQFWSGBX.js.map
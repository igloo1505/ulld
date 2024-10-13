import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ToDoMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var ToDoMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  dueAt: z.lazy(() => SortOrderSchema).optional(),
  details: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  toDoListId: z.lazy(() => SortOrderSchema).optional(),
  completedOn: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ToDoMaxOrderByAggregateInputSchema_default = ToDoMaxOrderByAggregateInputSchema;

export {
  ToDoMaxOrderByAggregateInputSchema,
  ToDoMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-CMRQ6A7X.js.map
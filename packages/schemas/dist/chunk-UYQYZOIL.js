import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ToDoMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var ToDoMinOrderByAggregateInputSchema = z.object({
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
var ToDoMinOrderByAggregateInputSchema_default = ToDoMinOrderByAggregateInputSchema;

export {
  ToDoMinOrderByAggregateInputSchema,
  ToDoMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-UYQYZOIL.js.map
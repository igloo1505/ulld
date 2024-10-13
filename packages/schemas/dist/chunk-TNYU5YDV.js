import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ToDoAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var ToDoAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  toDoListId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ToDoAvgOrderByAggregateInputSchema_default = ToDoAvgOrderByAggregateInputSchema;

export {
  ToDoAvgOrderByAggregateInputSchema,
  ToDoAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-TNYU5YDV.js.map
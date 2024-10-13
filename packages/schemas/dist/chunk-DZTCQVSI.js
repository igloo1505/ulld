import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ToDoListCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var ToDoListCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ToDoListCountOrderByAggregateInputSchema_default = ToDoListCountOrderByAggregateInputSchema;

export {
  ToDoListCountOrderByAggregateInputSchema,
  ToDoListCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-DZTCQVSI.js.map
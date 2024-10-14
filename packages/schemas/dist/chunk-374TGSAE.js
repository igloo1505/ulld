import {
  ToDoCountOrderByAggregateInputSchema
} from "./chunk-WWUDH4KB.js";
import {
  ToDoAvgOrderByAggregateInputSchema
} from "./chunk-NXDMIYOF.js";
import {
  ToDoMinOrderByAggregateInputSchema
} from "./chunk-JLYLUD4S.js";
import {
  ToDoMaxOrderByAggregateInputSchema
} from "./chunk-MUI7E7DO.js";
import {
  ToDoSumOrderByAggregateInputSchema
} from "./chunk-EQFWSGBX.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/ToDoOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var ToDoOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  dueAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  details: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  parentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  category: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  toDoListId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  completedOn: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _count: z.lazy(() => ToDoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ToDoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ToDoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ToDoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ToDoSumOrderByAggregateInputSchema).optional()
}).strict();
var ToDoOrderByWithAggregationInputSchema_default = ToDoOrderByWithAggregationInputSchema;

export {
  ToDoOrderByWithAggregationInputSchema,
  ToDoOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-374TGSAE.js.map
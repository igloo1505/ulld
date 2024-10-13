import {
  ToDoListAvgOrderByAggregateInputSchema
} from "./chunk-E6TSHHPT.js";
import {
  ToDoListCountOrderByAggregateInputSchema
} from "./chunk-DZTCQVSI.js";
import {
  ToDoListMinOrderByAggregateInputSchema
} from "./chunk-SFDKXKCQ.js";
import {
  ToDoListMaxOrderByAggregateInputSchema
} from "./chunk-FSBWHBSB.js";
import {
  ToDoListSumOrderByAggregateInputSchema
} from "./chunk-SR4HYHR3.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ToDoListOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var ToDoListOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ToDoListCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ToDoListAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ToDoListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ToDoListMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ToDoListSumOrderByAggregateInputSchema).optional()
}).strict();
var ToDoListOrderByWithAggregationInputSchema_default = ToDoListOrderByWithAggregationInputSchema;

export {
  ToDoListOrderByWithAggregationInputSchema,
  ToDoListOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-AWMLJ2JC.js.map
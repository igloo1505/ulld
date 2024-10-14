import {
  ToDoListAvgOrderByAggregateInputSchema
} from "./chunk-TV2W2RR2.js";
import {
  ToDoListCountOrderByAggregateInputSchema
} from "./chunk-EPGDSVDA.js";
import {
  ToDoListMinOrderByAggregateInputSchema
} from "./chunk-6V3HPYO6.js";
import {
  ToDoListMaxOrderByAggregateInputSchema
} from "./chunk-WTGJVMCA.js";
import {
  ToDoListSumOrderByAggregateInputSchema
} from "./chunk-6GR3DBXR.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-JCHS5IMB.js.map
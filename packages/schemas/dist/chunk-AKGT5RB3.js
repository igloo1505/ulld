import {
  KanbanCountOrderByAggregateInputSchema
} from "./chunk-W5WBKUK5.js";
import {
  KanbanAvgOrderByAggregateInputSchema
} from "./chunk-JMFMGQ3G.js";
import {
  KanbanMinOrderByAggregateInputSchema
} from "./chunk-67AWJ6RA.js";
import {
  KanbanMaxOrderByAggregateInputSchema
} from "./chunk-OJJE4G7H.js";
import {
  KanbanSumOrderByAggregateInputSchema
} from "./chunk-UQ6LJYZY.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanbanOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var KanbanOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => KanbanCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => KanbanAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KanbanMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KanbanMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => KanbanSumOrderByAggregateInputSchema).optional()
}).strict();
var KanbanOrderByWithAggregationInputSchema_default = KanbanOrderByWithAggregationInputSchema;

export {
  KanbanOrderByWithAggregationInputSchema,
  KanbanOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-AKGT5RB3.js.map
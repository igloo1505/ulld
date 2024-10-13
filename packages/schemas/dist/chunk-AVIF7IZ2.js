import {
  KanbanCountOrderByAggregateInputSchema
} from "./chunk-JFOFPA3U.js";
import {
  KanbanAvgOrderByAggregateInputSchema
} from "./chunk-JLLL5HSJ.js";
import {
  KanbanMinOrderByAggregateInputSchema
} from "./chunk-ZSDVGGHE.js";
import {
  KanbanMaxOrderByAggregateInputSchema
} from "./chunk-4XGEHRET.js";
import {
  KanbanSumOrderByAggregateInputSchema
} from "./chunk-ACJMR6O3.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-AVIF7IZ2.js.map
import {
  TopicCountOrderByAggregateInputSchema
} from "./chunk-NCRCHHG7.js";
import {
  TopicAvgOrderByAggregateInputSchema
} from "./chunk-WE6X3JVD.js";
import {
  TopicMinOrderByAggregateInputSchema
} from "./chunk-4G62NWGE.js";
import {
  TopicMaxOrderByAggregateInputSchema
} from "./chunk-HK4W55RN.js";
import {
  TopicSumOrderByAggregateInputSchema
} from "./chunk-MG56Q72T.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TopicOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var TopicOrderByWithAggregationInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TopicCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TopicAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TopicMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TopicMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TopicSumOrderByAggregateInputSchema).optional()
}).strict();
var TopicOrderByWithAggregationInputSchema_default = TopicOrderByWithAggregationInputSchema;

export {
  TopicOrderByWithAggregationInputSchema,
  TopicOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-WEZTN24G.js.map
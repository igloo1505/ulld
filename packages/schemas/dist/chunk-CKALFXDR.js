import {
  TopicCountOrderByAggregateInputSchema
} from "./chunk-5TFKRPI4.js";
import {
  TopicAvgOrderByAggregateInputSchema
} from "./chunk-XBLQ42BB.js";
import {
  TopicMinOrderByAggregateInputSchema
} from "./chunk-DYC4UMAT.js";
import {
  TopicMaxOrderByAggregateInputSchema
} from "./chunk-5YECREIJ.js";
import {
  TopicSumOrderByAggregateInputSchema
} from "./chunk-SVGKKEOY.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-CKALFXDR.js.map
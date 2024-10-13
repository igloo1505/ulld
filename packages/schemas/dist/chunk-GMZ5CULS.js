import {
  TagCountOrderByAggregateInputSchema
} from "./chunk-7NSEIYAK.js";
import {
  TagAvgOrderByAggregateInputSchema
} from "./chunk-UF4B76DH.js";
import {
  TagMinOrderByAggregateInputSchema
} from "./chunk-672RZM7R.js";
import {
  TagMaxOrderByAggregateInputSchema
} from "./chunk-27YMIZMA.js";
import {
  TagSumOrderByAggregateInputSchema
} from "./chunk-YUMY7QYS.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/TagOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var TagOrderByWithAggregationInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagSumOrderByAggregateInputSchema).optional()
}).strict();
var TagOrderByWithAggregationInputSchema_default = TagOrderByWithAggregationInputSchema;

export {
  TagOrderByWithAggregationInputSchema,
  TagOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-GMZ5CULS.js.map
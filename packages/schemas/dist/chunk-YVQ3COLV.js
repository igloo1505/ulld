import {
  TagCountOrderByAggregateInputSchema
} from "./chunk-E6CGKH6L.js";
import {
  TagAvgOrderByAggregateInputSchema
} from "./chunk-KKA73FPO.js";
import {
  TagMinOrderByAggregateInputSchema
} from "./chunk-AORROVEF.js";
import {
  TagMaxOrderByAggregateInputSchema
} from "./chunk-RXIEUEBW.js";
import {
  TagSumOrderByAggregateInputSchema
} from "./chunk-AHRQLUTW.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-YVQ3COLV.js.map
import {
  ReadingListCountOrderByAggregateInputSchema
} from "./chunk-JJK3UMUJ.js";
import {
  ReadingListMinOrderByAggregateInputSchema
} from "./chunk-W5SXUZNG.js";
import {
  ReadingListMaxOrderByAggregateInputSchema
} from "./chunk-2IM2QSCT.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ReadingListOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var ReadingListOrderByWithAggregationInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReadingListCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReadingListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReadingListMinOrderByAggregateInputSchema).optional()
}).strict();
var ReadingListOrderByWithAggregationInputSchema_default = ReadingListOrderByWithAggregationInputSchema;

export {
  ReadingListOrderByWithAggregationInputSchema,
  ReadingListOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-VXR4KI52.js.map
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ReadingListMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var ReadingListMaxOrderByAggregateInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
var ReadingListMaxOrderByAggregateInputSchema_default = ReadingListMaxOrderByAggregateInputSchema;

export {
  ReadingListMaxOrderByAggregateInputSchema,
  ReadingListMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-2IM2QSCT.js.map
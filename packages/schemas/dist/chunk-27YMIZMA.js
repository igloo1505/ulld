import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/TagMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var TagMaxOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TagMaxOrderByAggregateInputSchema_default = TagMaxOrderByAggregateInputSchema;

export {
  TagMaxOrderByAggregateInputSchema,
  TagMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-27YMIZMA.js.map
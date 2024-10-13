import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/TagMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var TagMinOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TagMinOrderByAggregateInputSchema_default = TagMinOrderByAggregateInputSchema;

export {
  TagMinOrderByAggregateInputSchema,
  TagMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-672RZM7R.js.map
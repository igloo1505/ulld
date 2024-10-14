import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TagCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var TagCountOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TagCountOrderByAggregateInputSchema_default = TagCountOrderByAggregateInputSchema;

export {
  TagCountOrderByAggregateInputSchema,
  TagCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-E6CGKH6L.js.map
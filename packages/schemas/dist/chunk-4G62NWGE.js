import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TopicMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var TopicMinOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TopicMinOrderByAggregateInputSchema_default = TopicMinOrderByAggregateInputSchema;

export {
  TopicMinOrderByAggregateInputSchema,
  TopicMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-4G62NWGE.js.map
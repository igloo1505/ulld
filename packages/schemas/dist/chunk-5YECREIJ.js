import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/TopicMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var TopicMaxOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TopicMaxOrderByAggregateInputSchema_default = TopicMaxOrderByAggregateInputSchema;

export {
  TopicMaxOrderByAggregateInputSchema,
  TopicMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-5YECREIJ.js.map
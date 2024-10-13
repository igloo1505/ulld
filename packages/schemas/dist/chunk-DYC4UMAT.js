import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-DYC4UMAT.js.map
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/TopicCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var TopicCountOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TopicCountOrderByAggregateInputSchema_default = TopicCountOrderByAggregateInputSchema;

export {
  TopicCountOrderByAggregateInputSchema,
  TopicCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-5TFKRPI4.js.map
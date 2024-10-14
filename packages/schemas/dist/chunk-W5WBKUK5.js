import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanbanCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanbanCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanbanCountOrderByAggregateInputSchema_default = KanbanCountOrderByAggregateInputSchema;

export {
  KanbanCountOrderByAggregateInputSchema,
  KanbanCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-W5WBKUK5.js.map
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-JFOFPA3U.js.map
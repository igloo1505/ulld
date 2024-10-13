import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/KanbanMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanbanMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanbanMaxOrderByAggregateInputSchema_default = KanbanMaxOrderByAggregateInputSchema;

export {
  KanbanMaxOrderByAggregateInputSchema,
  KanbanMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-4XGEHRET.js.map
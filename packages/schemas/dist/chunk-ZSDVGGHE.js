import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/KanbanMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanbanMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanbanMinOrderByAggregateInputSchema_default = KanbanMinOrderByAggregateInputSchema;

export {
  KanbanMinOrderByAggregateInputSchema,
  KanbanMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-ZSDVGGHE.js.map
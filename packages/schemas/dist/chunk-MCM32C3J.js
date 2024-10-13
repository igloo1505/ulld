import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/KanBanListMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanListMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  boardId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanListMaxOrderByAggregateInputSchema_default = KanBanListMaxOrderByAggregateInputSchema;

export {
  KanBanListMaxOrderByAggregateInputSchema,
  KanBanListMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-MCM32C3J.js.map
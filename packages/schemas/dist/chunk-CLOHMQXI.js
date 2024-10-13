import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/KanBanListMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanListMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  boardId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanListMinOrderByAggregateInputSchema_default = KanBanListMinOrderByAggregateInputSchema;

export {
  KanBanListMinOrderByAggregateInputSchema,
  KanBanListMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-CLOHMQXI.js.map
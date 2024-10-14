import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanListSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanListSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
  boardId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanListSumOrderByAggregateInputSchema_default = KanBanListSumOrderByAggregateInputSchema;

export {
  KanBanListSumOrderByAggregateInputSchema,
  KanBanListSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-TGZU7C2W.js.map
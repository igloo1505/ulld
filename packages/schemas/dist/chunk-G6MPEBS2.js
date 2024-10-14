import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanListAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanListAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
  boardId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanListAvgOrderByAggregateInputSchema_default = KanBanListAvgOrderByAggregateInputSchema;

export {
  KanBanListAvgOrderByAggregateInputSchema,
  KanBanListAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-G6MPEBS2.js.map
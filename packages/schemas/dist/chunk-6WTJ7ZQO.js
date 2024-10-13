import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-6WTJ7ZQO.js.map
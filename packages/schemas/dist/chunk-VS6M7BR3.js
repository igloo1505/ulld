import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanCardAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanCardAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.lazy(() => SortOrderSchema).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanCardAvgOrderByAggregateInputSchema_default = KanBanCardAvgOrderByAggregateInputSchema;

export {
  KanBanCardAvgOrderByAggregateInputSchema,
  KanBanCardAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-VS6M7BR3.js.map
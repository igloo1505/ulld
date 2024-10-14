import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanCardSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanCardSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.lazy(() => SortOrderSchema).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanCardSumOrderByAggregateInputSchema_default = KanBanCardSumOrderByAggregateInputSchema;

export {
  KanBanCardSumOrderByAggregateInputSchema,
  KanBanCardSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-XLXKCQIW.js.map
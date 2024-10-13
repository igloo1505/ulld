import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-ZSWH3LDR.js.map
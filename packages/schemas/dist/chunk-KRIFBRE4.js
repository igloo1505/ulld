import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanCardCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanCardCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.lazy(() => SortOrderSchema).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  details: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanCardCountOrderByAggregateInputSchema_default = KanBanCardCountOrderByAggregateInputSchema;

export {
  KanBanCardCountOrderByAggregateInputSchema,
  KanBanCardCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-KRIFBRE4.js.map
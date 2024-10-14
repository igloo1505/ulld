import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanCardMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanCardMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.lazy(() => SortOrderSchema).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  details: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanCardMinOrderByAggregateInputSchema_default = KanBanCardMinOrderByAggregateInputSchema;

export {
  KanBanCardMinOrderByAggregateInputSchema,
  KanBanCardMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-2NUHICGC.js.map
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanCardMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanCardMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.lazy(() => SortOrderSchema).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  details: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanCardMaxOrderByAggregateInputSchema_default = KanBanCardMaxOrderByAggregateInputSchema;

export {
  KanBanCardMaxOrderByAggregateInputSchema,
  KanBanCardMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-FMXQSN5V.js.map
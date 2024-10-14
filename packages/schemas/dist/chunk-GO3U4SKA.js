import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanListCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var KanBanListCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  boardId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var KanBanListCountOrderByAggregateInputSchema_default = KanBanListCountOrderByAggregateInputSchema;

export {
  KanBanListCountOrderByAggregateInputSchema,
  KanBanListCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-GO3U4SKA.js.map
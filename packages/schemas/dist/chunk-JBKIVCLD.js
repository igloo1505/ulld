import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-JBKIVCLD.js.map
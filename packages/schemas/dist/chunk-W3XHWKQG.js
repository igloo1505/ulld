import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-W3XHWKQG.js.map
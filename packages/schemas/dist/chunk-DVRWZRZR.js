import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/BibMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var BibMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional()
}).strict();
var BibMaxOrderByAggregateInputSchema_default = BibMaxOrderByAggregateInputSchema;

export {
  BibMaxOrderByAggregateInputSchema,
  BibMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-DVRWZRZR.js.map
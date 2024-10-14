import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/BibMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var BibMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional()
}).strict();
var BibMinOrderByAggregateInputSchema_default = BibMinOrderByAggregateInputSchema;

export {
  BibMinOrderByAggregateInputSchema,
  BibMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-OCTO4XGA.js.map
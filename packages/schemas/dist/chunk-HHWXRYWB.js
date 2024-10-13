import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/BibCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var BibCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional()
}).strict();
var BibCountOrderByAggregateInputSchema_default = BibCountOrderByAggregateInputSchema;

export {
  BibCountOrderByAggregateInputSchema,
  BibCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-HHWXRYWB.js.map
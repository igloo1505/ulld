import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/RelatedValuesMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var RelatedValuesMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();
var RelatedValuesMaxOrderByAggregateInputSchema_default = RelatedValuesMaxOrderByAggregateInputSchema;

export {
  RelatedValuesMaxOrderByAggregateInputSchema,
  RelatedValuesMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-POIWZFKL.js.map
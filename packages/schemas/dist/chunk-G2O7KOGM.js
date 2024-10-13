import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/RelatedValuesCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var RelatedValuesCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var RelatedValuesCountOrderByAggregateInputSchema_default = RelatedValuesCountOrderByAggregateInputSchema;

export {
  RelatedValuesCountOrderByAggregateInputSchema,
  RelatedValuesCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-G2O7KOGM.js.map
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/RelatedValuesMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var RelatedValuesMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();
var RelatedValuesMinOrderByAggregateInputSchema_default = RelatedValuesMinOrderByAggregateInputSchema;

export {
  RelatedValuesMinOrderByAggregateInputSchema,
  RelatedValuesMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-DEKWXCLI.js.map
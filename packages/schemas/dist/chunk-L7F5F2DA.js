import {
  EquationOrderByRelationAggregateInputSchema
} from "./chunk-WXWOJNDL.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/RelatedValuesOrderByWithRelationInputSchema.ts
import { z } from "zod";
var RelatedValuesOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional(),
  equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional()
}).strict();
var RelatedValuesOrderByWithRelationInputSchema_default = RelatedValuesOrderByWithRelationInputSchema;

export {
  RelatedValuesOrderByWithRelationInputSchema,
  RelatedValuesOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-L7F5F2DA.js.map
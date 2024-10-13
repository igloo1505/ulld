import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/EquationMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var EquationMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  desc: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  asPython: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var EquationMinOrderByAggregateInputSchema_default = EquationMinOrderByAggregateInputSchema;

export {
  EquationMinOrderByAggregateInputSchema,
  EquationMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-TZSIQOVT.js.map
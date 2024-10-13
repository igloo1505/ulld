import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/EquationMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var EquationMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  desc: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  asPython: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var EquationMaxOrderByAggregateInputSchema_default = EquationMaxOrderByAggregateInputSchema;

export {
  EquationMaxOrderByAggregateInputSchema,
  EquationMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-UVDUUS4L.js.map
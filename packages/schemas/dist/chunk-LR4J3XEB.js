import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/EquationCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var EquationCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  desc: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  asPython: z.lazy(() => SortOrderSchema).optional(),
  variableLegend: z.lazy(() => SortOrderSchema).optional(),
  variables: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var EquationCountOrderByAggregateInputSchema_default = EquationCountOrderByAggregateInputSchema;

export {
  EquationCountOrderByAggregateInputSchema,
  EquationCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-LR4J3XEB.js.map
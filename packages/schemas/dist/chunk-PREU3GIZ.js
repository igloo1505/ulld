import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DefinitionMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var DefinitionMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  alphabeticalLabel: z.lazy(() => SortOrderSchema).optional(),
  mdxNoteId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DefinitionMaxOrderByAggregateInputSchema_default = DefinitionMaxOrderByAggregateInputSchema;

export {
  DefinitionMaxOrderByAggregateInputSchema,
  DefinitionMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-PREU3GIZ.js.map
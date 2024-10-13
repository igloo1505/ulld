import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DefinitionCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var DefinitionCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  alphabeticalLabel: z.lazy(() => SortOrderSchema).optional(),
  mdxNoteId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DefinitionCountOrderByAggregateInputSchema_default = DefinitionCountOrderByAggregateInputSchema;

export {
  DefinitionCountOrderByAggregateInputSchema,
  DefinitionCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-7QH334NJ.js.map
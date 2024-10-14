import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DefinitionMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var DefinitionMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  alphabeticalLabel: z.lazy(() => SortOrderSchema).optional(),
  mdxNoteId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var DefinitionMinOrderByAggregateInputSchema_default = DefinitionMinOrderByAggregateInputSchema;

export {
  DefinitionMinOrderByAggregateInputSchema,
  DefinitionMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-W47HOKN2.js.map
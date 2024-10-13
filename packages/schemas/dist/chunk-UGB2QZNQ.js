import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SubjectCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var SubjectCountOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SubjectCountOrderByAggregateInputSchema_default = SubjectCountOrderByAggregateInputSchema;

export {
  SubjectCountOrderByAggregateInputSchema,
  SubjectCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-UGB2QZNQ.js.map
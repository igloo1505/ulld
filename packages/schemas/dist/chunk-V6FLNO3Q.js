import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SubjectMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var SubjectMinOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SubjectMinOrderByAggregateInputSchema_default = SubjectMinOrderByAggregateInputSchema;

export {
  SubjectMinOrderByAggregateInputSchema,
  SubjectMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-V6FLNO3Q.js.map
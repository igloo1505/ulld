import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SubjectMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var SubjectMaxOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SubjectMaxOrderByAggregateInputSchema_default = SubjectMaxOrderByAggregateInputSchema;

export {
  SubjectMaxOrderByAggregateInputSchema,
  SubjectMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-UHE5457P.js.map
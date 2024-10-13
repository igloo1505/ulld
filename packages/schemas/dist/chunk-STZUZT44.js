import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SubjectAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var SubjectAvgOrderByAggregateInputSchema = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();
var SubjectAvgOrderByAggregateInputSchema_default = SubjectAvgOrderByAggregateInputSchema;

export {
  SubjectAvgOrderByAggregateInputSchema,
  SubjectAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-STZUZT44.js.map
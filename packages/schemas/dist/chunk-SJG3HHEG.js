import {
  SubjectAvgOrderByAggregateInputSchema
} from "./chunk-STZUZT44.js";
import {
  SubjectCountOrderByAggregateInputSchema
} from "./chunk-UGB2QZNQ.js";
import {
  SubjectMinOrderByAggregateInputSchema
} from "./chunk-V6FLNO3Q.js";
import {
  SubjectMaxOrderByAggregateInputSchema
} from "./chunk-UHE5457P.js";
import {
  SubjectSumOrderByAggregateInputSchema
} from "./chunk-WJVMDROY.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SubjectOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var SubjectOrderByWithAggregationInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SubjectCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SubjectAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SubjectMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SubjectMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SubjectSumOrderByAggregateInputSchema).optional()
}).strict();
var SubjectOrderByWithAggregationInputSchema_default = SubjectOrderByWithAggregationInputSchema;

export {
  SubjectOrderByWithAggregationInputSchema,
  SubjectOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-SJG3HHEG.js.map
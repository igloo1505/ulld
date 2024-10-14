import {
  SubjectAvgOrderByAggregateInputSchema
} from "./chunk-ENLC5QLT.js";
import {
  SubjectCountOrderByAggregateInputSchema
} from "./chunk-JDY5UVIS.js";
import {
  SubjectMinOrderByAggregateInputSchema
} from "./chunk-ESSK2IMU.js";
import {
  SubjectMaxOrderByAggregateInputSchema
} from "./chunk-UI7L2CYC.js";
import {
  SubjectSumOrderByAggregateInputSchema
} from "./chunk-6UDWUFCP.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-GNZQ3ECK.js.map
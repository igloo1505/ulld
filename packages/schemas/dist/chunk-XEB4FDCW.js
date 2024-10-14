import {
  PracticeExamAvgOrderByAggregateInputSchema
} from "./chunk-IHH7OPGD.js";
import {
  PracticeExamCountOrderByAggregateInputSchema
} from "./chunk-BGMPOCQR.js";
import {
  PracticeExamMinOrderByAggregateInputSchema
} from "./chunk-R27DRBYF.js";
import {
  PracticeExamMaxOrderByAggregateInputSchema
} from "./chunk-EYDPSCY3.js";
import {
  PracticeExamSumOrderByAggregateInputSchema
} from "./chunk-VPC5ZBNI.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/PracticeExamOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var PracticeExamOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PracticeExamCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PracticeExamAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PracticeExamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PracticeExamMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PracticeExamSumOrderByAggregateInputSchema).optional()
}).strict();
var PracticeExamOrderByWithAggregationInputSchema_default = PracticeExamOrderByWithAggregationInputSchema;

export {
  PracticeExamOrderByWithAggregationInputSchema,
  PracticeExamOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-XEB4FDCW.js.map
import {
  PracticeExamAvgOrderByAggregateInputSchema
} from "./chunk-NEG6F7WO.js";
import {
  PracticeExamCountOrderByAggregateInputSchema
} from "./chunk-VWUMW3DJ.js";
import {
  PracticeExamMinOrderByAggregateInputSchema
} from "./chunk-ZQCBKILA.js";
import {
  PracticeExamMaxOrderByAggregateInputSchema
} from "./chunk-CBIVQKIG.js";
import {
  PracticeExamSumOrderByAggregateInputSchema
} from "./chunk-B7BCGVB7.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-4CGPZDNK.js.map
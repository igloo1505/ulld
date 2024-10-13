import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/PracticeExamSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var PracticeExamSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional()
}).strict();
var PracticeExamSumOrderByAggregateInputSchema_default = PracticeExamSumOrderByAggregateInputSchema;

export {
  PracticeExamSumOrderByAggregateInputSchema,
  PracticeExamSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-B7BCGVB7.js.map
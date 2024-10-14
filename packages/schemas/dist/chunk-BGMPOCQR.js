import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/PracticeExamCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var PracticeExamCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional()
}).strict();
var PracticeExamCountOrderByAggregateInputSchema_default = PracticeExamCountOrderByAggregateInputSchema;

export {
  PracticeExamCountOrderByAggregateInputSchema,
  PracticeExamCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-BGMPOCQR.js.map
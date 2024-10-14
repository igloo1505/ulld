import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/PracticeExamAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var PracticeExamAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional()
}).strict();
var PracticeExamAvgOrderByAggregateInputSchema_default = PracticeExamAvgOrderByAggregateInputSchema;

export {
  PracticeExamAvgOrderByAggregateInputSchema,
  PracticeExamAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-IHH7OPGD.js.map
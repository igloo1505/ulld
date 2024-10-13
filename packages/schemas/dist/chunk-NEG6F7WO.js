import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-NEG6F7WO.js.map
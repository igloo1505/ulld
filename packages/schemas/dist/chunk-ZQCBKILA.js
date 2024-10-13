import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/PracticeExamMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var PracticeExamMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional()
}).strict();
var PracticeExamMinOrderByAggregateInputSchema_default = PracticeExamMinOrderByAggregateInputSchema;

export {
  PracticeExamMinOrderByAggregateInputSchema,
  PracticeExamMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-ZQCBKILA.js.map
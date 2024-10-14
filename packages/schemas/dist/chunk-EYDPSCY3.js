import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/PracticeExamMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var PracticeExamMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional()
}).strict();
var PracticeExamMaxOrderByAggregateInputSchema_default = PracticeExamMaxOrderByAggregateInputSchema;

export {
  PracticeExamMaxOrderByAggregateInputSchema,
  PracticeExamMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-EYDPSCY3.js.map
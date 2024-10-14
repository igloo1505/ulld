import {
  IntWithAggregatesFilterSchema
} from "./chunk-S2WAI7QC.js";
import {
  DateTimeWithAggregatesFilterSchema
} from "./chunk-XCQN6FNH.js";

// src/database/inputTypeSchemas/PracticeExamScalarWhereWithAggregatesInputSchema.ts
import { z } from "zod";
var PracticeExamScalarWhereWithAggregatesInputSchema = z.object({
  AND: z.union([z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema), z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema), z.lazy(() => PracticeExamScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  correctCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  inCorrectCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  timeLimitInSeconds: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  timeCompletedInSeconds: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
}).strict();
var PracticeExamScalarWhereWithAggregatesInputSchema_default = PracticeExamScalarWhereWithAggregatesInputSchema;

export {
  PracticeExamScalarWhereWithAggregatesInputSchema,
  PracticeExamScalarWhereWithAggregatesInputSchema_default
};
//# sourceMappingURL=chunk-YXUTXVK4.js.map
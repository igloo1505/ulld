import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";

// src/database/inputTypeSchemas/PracticeExamScalarWhereInputSchema.ts
import { z } from "zod";
var PracticeExamScalarWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => PracticeExamScalarWhereInputSchema), z.lazy(() => PracticeExamScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => PracticeExamScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PracticeExamScalarWhereInputSchema), z.lazy(() => PracticeExamScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  correctCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  inCorrectCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  timeLimitInSeconds: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  timeCompletedInSeconds: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var PracticeExamScalarWhereInputSchema_default = PracticeExamScalarWhereInputSchema;

export {
  PracticeExamScalarWhereInputSchema,
  PracticeExamScalarWhereInputSchema_default
};
//# sourceMappingURL=chunk-VNOUTUHD.js.map
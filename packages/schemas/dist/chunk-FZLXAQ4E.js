import {
  PracticeExamWhereInputSchema,
  QAPairListRelationFilterSchema,
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  TopicListRelationFilterSchema
} from "./chunk-LSOXTUZL.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";

// src/database/inputTypeSchemas/PracticeExamWhereUniqueInputSchema.ts
import { z } from "zod";
var PracticeExamWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => PracticeExamWhereInputSchema), z.lazy(() => PracticeExamWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => PracticeExamWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PracticeExamWhereInputSchema), z.lazy(() => PracticeExamWhereInputSchema).array()]).optional(),
  correctCount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  inCorrectCount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  timeLimitInSeconds: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  timeCompletedInSeconds: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  questions: z.lazy(() => QAPairListRelationFilterSchema).optional()
}).strict());
var PracticeExamWhereUniqueInputSchema_default = PracticeExamWhereUniqueInputSchema;

export {
  PracticeExamWhereUniqueInputSchema,
  PracticeExamWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-FZLXAQ4E.js.map
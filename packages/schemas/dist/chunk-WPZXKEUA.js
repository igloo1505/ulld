import {
  PracticeExamIncludeSchema,
  QAPairFindManyArgsSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  PracticeExamCountOutputTypeArgsSchema
} from "./chunk-GRQLS3JL.js";
import {
  PracticeExamWhereUniqueInputSchema
} from "./chunk-FZLXAQ4E.js";

// src/database/outputTypeSchemas/PracticeExamDeleteArgsSchema.ts
import { z } from "zod";
var PracticeExamSelectSchema = z.object({
  id: z.boolean().optional(),
  correctCount: z.boolean().optional(),
  inCorrectCount: z.boolean().optional(),
  timeLimitInSeconds: z.boolean().optional(),
  timeCompletedInSeconds: z.boolean().optional(),
  date: z.boolean().optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  questions: z.union([z.boolean(), z.lazy(() => QAPairFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PracticeExamCountOutputTypeArgsSchema)]).optional()
}).strict();
var PracticeExamDeleteArgsSchema = z.object({
  select: PracticeExamSelectSchema.optional(),
  include: PracticeExamIncludeSchema.optional(),
  where: PracticeExamWhereUniqueInputSchema
}).strict();
var PracticeExamDeleteArgsSchema_default = PracticeExamDeleteArgsSchema;

export {
  PracticeExamSelectSchema,
  PracticeExamDeleteArgsSchema,
  PracticeExamDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-WPZXKEUA.js.map
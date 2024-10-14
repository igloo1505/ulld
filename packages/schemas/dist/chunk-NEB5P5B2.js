import {
  PracticeExamCreateInputSchema
} from "./chunk-DBIJFS7W.js";
import {
  PracticeExamUncheckedCreateInputSchema
} from "./chunk-SNRKLSJC.js";
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

// src/database/outputTypeSchemas/PracticeExamCreateArgsSchema.ts
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
var PracticeExamCreateArgsSchema = z.object({
  select: PracticeExamSelectSchema.optional(),
  include: PracticeExamIncludeSchema.optional(),
  data: z.union([PracticeExamCreateInputSchema, PracticeExamUncheckedCreateInputSchema])
}).strict();
var PracticeExamCreateArgsSchema_default = PracticeExamCreateArgsSchema;

export {
  PracticeExamSelectSchema,
  PracticeExamCreateArgsSchema,
  PracticeExamCreateArgsSchema_default
};
//# sourceMappingURL=chunk-NEB5P5B2.js.map
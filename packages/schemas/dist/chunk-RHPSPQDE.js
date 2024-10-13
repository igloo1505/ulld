import {
  PracticeExamCreateInputSchema
} from "./chunk-HOWHWFO2.js";
import {
  PracticeExamUncheckedCreateInputSchema
} from "./chunk-KJ7SPMKH.js";
import {
  PracticeExamIncludeSchema,
  QAPairFindManyArgsSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  PracticeExamCountOutputTypeArgsSchema
} from "./chunk-EEIW2CJP.js";

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
//# sourceMappingURL=chunk-RHPSPQDE.js.map
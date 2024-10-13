import {
  PracticeExamFindManyArgsSchema,
  QAPairIncludeSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  QAPairCountOutputTypeArgsSchema
} from "./chunk-GJQ47UAP.js";
import {
  QAPairWhereUniqueInputSchema
} from "./chunk-Q3EJFDQJ.js";

// src/database/outputTypeSchemas/QAPairDeleteArgsSchema.ts
import { z } from "zod";
var QAPairSelectSchema = z.object({
  id: z.boolean().optional(),
  question: z.boolean().optional(),
  answer: z.boolean().optional(),
  description: z.boolean().optional(),
  secondaryLabel: z.boolean().optional(),
  correctCount: z.boolean().optional(),
  inCorrectCount: z.boolean().optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  practiceExam: z.union([z.boolean(), z.lazy(() => PracticeExamFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => QAPairCountOutputTypeArgsSchema)]).optional()
}).strict();
var QAPairDeleteArgsSchema = z.object({
  select: QAPairSelectSchema.optional(),
  include: QAPairIncludeSchema.optional(),
  where: QAPairWhereUniqueInputSchema
}).strict();
var QAPairDeleteArgsSchema_default = QAPairDeleteArgsSchema;

export {
  QAPairSelectSchema,
  QAPairDeleteArgsSchema,
  QAPairDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-HRSXRQR2.js.map
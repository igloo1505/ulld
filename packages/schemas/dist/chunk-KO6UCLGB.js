import {
  QAPairCreateInputSchema
} from "./chunk-FY3PFTVU.js";
import {
  QAPairUncheckedCreateInputSchema
} from "./chunk-HANNCXID.js";
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

// src/database/outputTypeSchemas/QAPairCreateArgsSchema.ts
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
var QAPairCreateArgsSchema = z.object({
  select: QAPairSelectSchema.optional(),
  include: QAPairIncludeSchema.optional(),
  data: z.union([QAPairCreateInputSchema, QAPairUncheckedCreateInputSchema])
}).strict();
var QAPairCreateArgsSchema_default = QAPairCreateArgsSchema;

export {
  QAPairSelectSchema,
  QAPairCreateArgsSchema,
  QAPairCreateArgsSchema_default
};
//# sourceMappingURL=chunk-KO6UCLGB.js.map
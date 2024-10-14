import {
  QAPairCreateInputSchema
} from "./chunk-LJ4KAUBP.js";
import {
  QAPairUncheckedCreateInputSchema
} from "./chunk-MPT5AN7X.js";
import {
  QAPairUncheckedUpdateInputSchema
} from "./chunk-HEL5CVIS.js";
import {
  QAPairUpdateInputSchema
} from "./chunk-LVASD7VM.js";
import {
  PracticeExamFindManyArgsSchema,
  QAPairIncludeSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  QAPairCountOutputTypeArgsSchema
} from "./chunk-ZKYK7NO7.js";
import {
  QAPairWhereUniqueInputSchema
} from "./chunk-B2UXPVL4.js";

// src/database/outputTypeSchemas/QAPairUpsertArgsSchema.ts
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
var QAPairUpsertArgsSchema = z.object({
  select: QAPairSelectSchema.optional(),
  include: QAPairIncludeSchema.optional(),
  where: QAPairWhereUniqueInputSchema,
  create: z.union([QAPairCreateInputSchema, QAPairUncheckedCreateInputSchema]),
  update: z.union([QAPairUpdateInputSchema, QAPairUncheckedUpdateInputSchema])
}).strict();
var QAPairUpsertArgsSchema_default = QAPairUpsertArgsSchema;

export {
  QAPairSelectSchema,
  QAPairUpsertArgsSchema,
  QAPairUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-KPHT77RL.js.map
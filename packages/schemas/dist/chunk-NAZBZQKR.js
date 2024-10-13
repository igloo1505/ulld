import {
  PracticeExamCreateInputSchema
} from "./chunk-HOWHWFO2.js";
import {
  PracticeExamUncheckedCreateInputSchema
} from "./chunk-KJ7SPMKH.js";
import {
  PracticeExamUncheckedUpdateInputSchema
} from "./chunk-VHATQEBY.js";
import {
  PracticeExamUpdateInputSchema
} from "./chunk-EJPMFKMQ.js";
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
import {
  PracticeExamWhereUniqueInputSchema
} from "./chunk-EV6HNKJM.js";

// src/database/outputTypeSchemas/PracticeExamUpsertArgsSchema.ts
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
var PracticeExamUpsertArgsSchema = z.object({
  select: PracticeExamSelectSchema.optional(),
  include: PracticeExamIncludeSchema.optional(),
  where: PracticeExamWhereUniqueInputSchema,
  create: z.union([PracticeExamCreateInputSchema, PracticeExamUncheckedCreateInputSchema]),
  update: z.union([PracticeExamUpdateInputSchema, PracticeExamUncheckedUpdateInputSchema])
}).strict();
var PracticeExamUpsertArgsSchema_default = PracticeExamUpsertArgsSchema;

export {
  PracticeExamSelectSchema,
  PracticeExamUpsertArgsSchema,
  PracticeExamUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-NAZBZQKR.js.map
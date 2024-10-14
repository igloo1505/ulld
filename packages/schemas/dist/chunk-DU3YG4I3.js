import {
  PracticeExamCreateInputSchema
} from "./chunk-DBIJFS7W.js";
import {
  PracticeExamUncheckedCreateInputSchema
} from "./chunk-SNRKLSJC.js";
import {
  PracticeExamUncheckedUpdateInputSchema
} from "./chunk-52YO25BO.js";
import {
  PracticeExamUpdateInputSchema
} from "./chunk-UKPTIJP3.js";
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
//# sourceMappingURL=chunk-DU3YG4I3.js.map
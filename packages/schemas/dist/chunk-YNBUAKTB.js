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
  PracticeExamOrderByWithRelationInputSchema
} from "./chunk-LW7N27TI.js";
import {
  PracticeExamWhereUniqueInputSchema
} from "./chunk-FZLXAQ4E.js";
import {
  PracticeExamScalarFieldEnumSchema
} from "./chunk-NO6FD3MG.js";
import {
  PracticeExamWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/PracticeExamFindFirstOrThrowArgsSchema.ts
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
var PracticeExamFindFirstOrThrowArgsSchema = z.object({
  select: PracticeExamSelectSchema.optional(),
  include: PracticeExamIncludeSchema.optional(),
  where: PracticeExamWhereInputSchema.optional(),
  orderBy: z.union([PracticeExamOrderByWithRelationInputSchema.array(), PracticeExamOrderByWithRelationInputSchema]).optional(),
  cursor: PracticeExamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([PracticeExamScalarFieldEnumSchema, PracticeExamScalarFieldEnumSchema.array()]).optional()
}).strict();
var PracticeExamFindFirstOrThrowArgsSchema_default = PracticeExamFindFirstOrThrowArgsSchema;

export {
  PracticeExamSelectSchema,
  PracticeExamFindFirstOrThrowArgsSchema,
  PracticeExamFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-YNBUAKTB.js.map
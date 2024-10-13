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
  PracticeExamOrderByWithRelationInputSchema
} from "./chunk-OR45XDUV.js";
import {
  PracticeExamWhereUniqueInputSchema
} from "./chunk-EV6HNKJM.js";
import {
  PracticeExamScalarFieldEnumSchema
} from "./chunk-CZF7TPIB.js";
import {
  PracticeExamWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/PracticeExamFindFirstArgsSchema.ts
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
var PracticeExamFindFirstArgsSchema = z.object({
  select: PracticeExamSelectSchema.optional(),
  include: PracticeExamIncludeSchema.optional(),
  where: PracticeExamWhereInputSchema.optional(),
  orderBy: z.union([PracticeExamOrderByWithRelationInputSchema.array(), PracticeExamOrderByWithRelationInputSchema]).optional(),
  cursor: PracticeExamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([PracticeExamScalarFieldEnumSchema, PracticeExamScalarFieldEnumSchema.array()]).optional()
}).strict();
var PracticeExamFindFirstArgsSchema_default = PracticeExamFindFirstArgsSchema;

export {
  PracticeExamSelectSchema,
  PracticeExamFindFirstArgsSchema,
  PracticeExamFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-WV7RGRIN.js.map
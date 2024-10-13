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
  QAPairOrderByWithRelationInputSchema
} from "./chunk-22LE3TNP.js";
import {
  QAPairWhereUniqueInputSchema
} from "./chunk-Q3EJFDQJ.js";
import {
  QAPairScalarFieldEnumSchema
} from "./chunk-QUCMP4ES.js";
import {
  QAPairWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/QAPairFindFirstOrThrowArgsSchema.ts
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
var QAPairFindFirstOrThrowArgsSchema = z.object({
  select: QAPairSelectSchema.optional(),
  include: QAPairIncludeSchema.optional(),
  where: QAPairWhereInputSchema.optional(),
  orderBy: z.union([QAPairOrderByWithRelationInputSchema.array(), QAPairOrderByWithRelationInputSchema]).optional(),
  cursor: QAPairWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([QAPairScalarFieldEnumSchema, QAPairScalarFieldEnumSchema.array()]).optional()
}).strict();
var QAPairFindFirstOrThrowArgsSchema_default = QAPairFindFirstOrThrowArgsSchema;

export {
  QAPairSelectSchema,
  QAPairFindFirstOrThrowArgsSchema,
  QAPairFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-NI7TSVE3.js.map
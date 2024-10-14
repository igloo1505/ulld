import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QAPairIncludeSchema } from '../inputTypeSchemas/QAPairIncludeSchema'
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema'
import { QAPairOrderByWithRelationInputSchema } from '../inputTypeSchemas/QAPairOrderByWithRelationInputSchema'
import { QAPairWhereUniqueInputSchema } from '../inputTypeSchemas/QAPairWhereUniqueInputSchema'
import { QAPairScalarFieldEnumSchema } from '../inputTypeSchemas/QAPairScalarFieldEnumSchema'
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { PracticeExamFindManyArgsSchema } from "../outputTypeSchemas/PracticeExamFindManyArgsSchema"
import { QAPairCountOutputTypeArgsSchema } from "../outputTypeSchemas/QAPairCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QAPairSelectSchema: z.ZodType<Prisma.QAPairSelect> = z.object({
  id: z.boolean().optional(),
  question: z.boolean().optional(),
  answer: z.boolean().optional(),
  description: z.boolean().optional(),
  secondaryLabel: z.boolean().optional(),
  correctCount: z.boolean().optional(),
  inCorrectCount: z.boolean().optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  practiceExam: z.union([z.boolean(),z.lazy(() => PracticeExamFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => QAPairCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const QAPairFindFirstArgsSchema: z.ZodType<Prisma.QAPairFindFirstArgs> = z.object({
  select: QAPairSelectSchema.optional(),
  include: QAPairIncludeSchema.optional(),
  where: QAPairWhereInputSchema.optional(),
  orderBy: z.union([ QAPairOrderByWithRelationInputSchema.array(),QAPairOrderByWithRelationInputSchema ]).optional(),
  cursor: QAPairWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QAPairScalarFieldEnumSchema,QAPairScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default QAPairFindFirstArgsSchema;

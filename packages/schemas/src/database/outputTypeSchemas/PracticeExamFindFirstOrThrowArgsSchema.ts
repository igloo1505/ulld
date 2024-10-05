import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamIncludeSchema } from '../inputTypeSchemas/PracticeExamIncludeSchema'
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema'
import { PracticeExamOrderByWithRelationInputSchema } from '../inputTypeSchemas/PracticeExamOrderByWithRelationInputSchema'
import { PracticeExamWhereUniqueInputSchema } from '../inputTypeSchemas/PracticeExamWhereUniqueInputSchema'
import { PracticeExamScalarFieldEnumSchema } from '../inputTypeSchemas/PracticeExamScalarFieldEnumSchema'
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { QAPairFindManyArgsSchema } from "../outputTypeSchemas/QAPairFindManyArgsSchema"
import { PracticeExamCountOutputTypeArgsSchema } from "../outputTypeSchemas/PracticeExamCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PracticeExamSelectSchema: z.ZodType<Prisma.PracticeExamSelect> = z.object({
  id: z.boolean().optional(),
  correctCount: z.boolean().optional(),
  inCorrectCount: z.boolean().optional(),
  timeLimitInSeconds: z.boolean().optional(),
  timeCompletedInSeconds: z.boolean().optional(),
  date: z.boolean().optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  questions: z.union([z.boolean(),z.lazy(() => QAPairFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PracticeExamCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PracticeExamFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PracticeExamFindFirstOrThrowArgs> = z.object({
  select: PracticeExamSelectSchema.optional(),
  include: PracticeExamIncludeSchema.optional(),
  where: PracticeExamWhereInputSchema.optional(),
  orderBy: z.union([ PracticeExamOrderByWithRelationInputSchema.array(),PracticeExamOrderByWithRelationInputSchema ]).optional(),
  cursor: PracticeExamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PracticeExamScalarFieldEnumSchema,PracticeExamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PracticeExamFindFirstOrThrowArgsSchema;

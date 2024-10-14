import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamIncludeSchema } from '../inputTypeSchemas/PracticeExamIncludeSchema'
import { PracticeExamUpdateInputSchema } from '../inputTypeSchemas/PracticeExamUpdateInputSchema'
import { PracticeExamUncheckedUpdateInputSchema } from '../inputTypeSchemas/PracticeExamUncheckedUpdateInputSchema'
import { PracticeExamWhereUniqueInputSchema } from '../inputTypeSchemas/PracticeExamWhereUniqueInputSchema'
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

export const PracticeExamUpdateArgsSchema: z.ZodType<Prisma.PracticeExamUpdateArgs> = z.object({
  select: PracticeExamSelectSchema.optional(),
  include: PracticeExamIncludeSchema.optional(),
  data: z.union([ PracticeExamUpdateInputSchema,PracticeExamUncheckedUpdateInputSchema ]),
  where: PracticeExamWhereUniqueInputSchema,
}).strict() ;

export default PracticeExamUpdateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { PracticeExamIncludeSchema } from '../inputTypeSchemas/PracticeExamIncludeSchema.js'
import { PracticeExamWhereUniqueInputSchema } from '../inputTypeSchemas/PracticeExamWhereUniqueInputSchema.js'
import { PracticeExamCreateInputSchema } from '../inputTypeSchemas/PracticeExamCreateInputSchema.js'
import { PracticeExamUncheckedCreateInputSchema } from '../inputTypeSchemas/PracticeExamUncheckedCreateInputSchema.js'
import { PracticeExamUpdateInputSchema } from '../inputTypeSchemas/PracticeExamUpdateInputSchema.js'
import { PracticeExamUncheckedUpdateInputSchema } from '../inputTypeSchemas/PracticeExamUncheckedUpdateInputSchema.js'
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
export const PracticeExamUpsertArgsSchema: z.ZodType<Prisma.PracticeExamUpsertArgs> = z.object({
  select: PracticeExamSelectSchema.optional(),
  include: PracticeExamIncludeSchema.optional(),
  where: PracticeExamWhereUniqueInputSchema,
  create: z.union([ PracticeExamCreateInputSchema,PracticeExamUncheckedCreateInputSchema ]),
  update: z.union([ PracticeExamUpdateInputSchema,PracticeExamUncheckedUpdateInputSchema ]),
}).strict() ;
export default PracticeExamUpsertArgsSchema;
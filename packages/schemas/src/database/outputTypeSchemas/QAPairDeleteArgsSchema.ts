import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QAPairIncludeSchema } from '../inputTypeSchemas/QAPairIncludeSchema'
import { QAPairWhereUniqueInputSchema } from '../inputTypeSchemas/QAPairWhereUniqueInputSchema'
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

export const QAPairDeleteArgsSchema: z.ZodType<Prisma.QAPairDeleteArgs> = z.object({
  select: QAPairSelectSchema.optional(),
  include: QAPairIncludeSchema.optional(),
  where: QAPairWhereUniqueInputSchema,
}).strict() ;

export default QAPairDeleteArgsSchema;

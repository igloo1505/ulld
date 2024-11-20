import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { QAPairFindManyArgsSchema } from "../outputTypeSchemas/QAPairFindManyArgsSchema"
import { PracticeExamCountOutputTypeArgsSchema } from "../outputTypeSchemas/PracticeExamCountOutputTypeArgsSchema"

export const PracticeExamIncludeSchema: z.ZodType<Prisma.PracticeExamInclude> = z.object({
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  questions: z.union([z.boolean(),z.lazy(() => QAPairFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PracticeExamCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PracticeExamIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { PracticeExamFindManyArgsSchema } from "../outputTypeSchemas/PracticeExamFindManyArgsSchema"
import { QAPairCountOutputTypeArgsSchema } from "../outputTypeSchemas/QAPairCountOutputTypeArgsSchema"

export const QAPairIncludeSchema: z.ZodType<Prisma.QAPairInclude> = z.object({
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  practiceExam: z.union([z.boolean(),z.lazy(() => PracticeExamFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => QAPairCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default QAPairIncludeSchema;

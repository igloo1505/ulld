import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema';
import { QAPairListRelationFilterSchema } from './QAPairListRelationFilterSchema';

export const PracticeExamWhereInputSchema: z.ZodType<Prisma.PracticeExamWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PracticeExamWhereInputSchema),z.lazy(() => PracticeExamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PracticeExamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PracticeExamWhereInputSchema),z.lazy(() => PracticeExamWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  correctCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inCorrectCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  timeLimitInSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  timeCompletedInSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  questions: z.lazy(() => QAPairListRelationFilterSchema).optional()
}).strict();

export default PracticeExamWhereInputSchema;

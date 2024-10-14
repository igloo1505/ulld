import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereInputSchema } from './PracticeExamWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema';
import { QAPairListRelationFilterSchema } from './QAPairListRelationFilterSchema';

export const PracticeExamWhereUniqueInputSchema: z.ZodType<Prisma.PracticeExamWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PracticeExamWhereInputSchema),z.lazy(() => PracticeExamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PracticeExamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PracticeExamWhereInputSchema),z.lazy(() => PracticeExamWhereInputSchema).array() ]).optional(),
  correctCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  inCorrectCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  timeLimitInSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  timeCompletedInSeconds: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  questions: z.lazy(() => QAPairListRelationFilterSchema).optional()
}).strict());

export default PracticeExamWhereUniqueInputSchema;

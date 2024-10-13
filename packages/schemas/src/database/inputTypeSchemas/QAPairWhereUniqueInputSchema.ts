import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereInputSchema } from '../QAPairWhereInputSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { StringNullableFilterSchema } from '../StringNullableFilterSchema.js';
import { IntFilterSchema } from '../IntFilterSchema.js';
import { TagListRelationFilterSchema } from '../TagListRelationFilterSchema.js';
import { TopicListRelationFilterSchema } from '../TopicListRelationFilterSchema.js';
import { SubjectListRelationFilterSchema } from '../SubjectListRelationFilterSchema.js';
import { PracticeExamListRelationFilterSchema } from '../PracticeExamListRelationFilterSchema.js';
export const QAPairWhereUniqueInputSchema: z.ZodType<Prisma.QAPairWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    question: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    question: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  question: z.string().optional(),
  AND: z.union([ z.lazy(() => QAPairWhereInputSchema),z.lazy(() => QAPairWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QAPairWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QAPairWhereInputSchema),z.lazy(() => QAPairWhereInputSchema).array() ]).optional(),
  answer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  secondaryLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  correctCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  inCorrectCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamListRelationFilterSchema).optional()
}).strict());
export default QAPairWhereUniqueInputSchema;
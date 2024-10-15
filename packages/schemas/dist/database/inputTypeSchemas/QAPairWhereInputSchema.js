import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { IntFilterSchema } from './IntFilterSchema.js';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema.js';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema.js';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema.js';
import { PracticeExamListRelationFilterSchema } from './PracticeExamListRelationFilterSchema.js';
export const QAPairWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => QAPairWhereInputSchema), z.lazy(() => QAPairWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => QAPairWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => QAPairWhereInputSchema), z.lazy(() => QAPairWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    question: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    answer: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    secondaryLabel: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    correctCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    inCorrectCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    tags: z.lazy(() => TagListRelationFilterSchema).optional(),
    topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
    subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamListRelationFilterSchema).optional()
}).strict();
export default QAPairWhereInputSchema;

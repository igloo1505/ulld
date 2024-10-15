import { z } from 'zod';
import { PracticeExamWhereInputSchema } from './PracticeExamWhereInputSchema.js';
import { IntFilterSchema } from './IntFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema.js';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema.js';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema.js';
import { QAPairListRelationFilterSchema } from './QAPairListRelationFilterSchema.js';
export const PracticeExamWhereUniqueInputSchema = z.object({
    id: z.number().int()
})
    .and(z.object({
    id: z.number().int().optional(),
    AND: z.union([z.lazy(() => PracticeExamWhereInputSchema), z.lazy(() => PracticeExamWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => PracticeExamWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => PracticeExamWhereInputSchema), z.lazy(() => PracticeExamWhereInputSchema).array()]).optional(),
    correctCount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
    inCorrectCount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
    timeLimitInSeconds: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
    timeCompletedInSeconds: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
    date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
    tags: z.lazy(() => TagListRelationFilterSchema).optional(),
    subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
    questions: z.lazy(() => QAPairListRelationFilterSchema).optional()
}).strict());
export default PracticeExamWhereUniqueInputSchema;

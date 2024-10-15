import { z } from 'zod';
import { TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema } from './TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema.js';
import { TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema } from './TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema.js';
export const PracticeExamUncheckedCreateWithoutQuestionsInputSchema = z.object({
    id: z.number().int().optional(),
    correctCount: z.number().int(),
    inCorrectCount: z.number().int(),
    timeLimitInSeconds: z.number().int(),
    timeCompletedInSeconds: z.number().int(),
    date: z.coerce.date().optional(),
    topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
    tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
    subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
export default PracticeExamUncheckedCreateWithoutQuestionsInputSchema;

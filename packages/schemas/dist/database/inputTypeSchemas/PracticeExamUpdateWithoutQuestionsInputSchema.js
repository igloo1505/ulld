import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { TopicUpdateManyWithoutPracticeExamNestedInputSchema } from './TopicUpdateManyWithoutPracticeExamNestedInputSchema.js';
import { TagUpdateManyWithoutPracticeExamNestedInputSchema } from './TagUpdateManyWithoutPracticeExamNestedInputSchema.js';
import { SubjectUpdateManyWithoutPracticeExamNestedInputSchema } from './SubjectUpdateManyWithoutPracticeExamNestedInputSchema.js';
export const PracticeExamUpdateWithoutQuestionsInputSchema = z.object({
    correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    timeLimitInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    timeCompletedInSeconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    topics: z.lazy(() => TopicUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
    tags: z.lazy(() => TagUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
    subjects: z.lazy(() => SubjectUpdateManyWithoutPracticeExamNestedInputSchema).optional()
}).strict();
export default PracticeExamUpdateWithoutQuestionsInputSchema;

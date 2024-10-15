import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { TagUpdateManyWithoutQAPairNestedInputSchema } from './TagUpdateManyWithoutQAPairNestedInputSchema.js';
import { TopicUpdateManyWithoutQAPairNestedInputSchema } from './TopicUpdateManyWithoutQAPairNestedInputSchema.js';
import { SubjectUpdateManyWithoutQaPairNestedInputSchema } from './SubjectUpdateManyWithoutQaPairNestedInputSchema.js';
import { PracticeExamUpdateManyWithoutQuestionsNestedInputSchema } from './PracticeExamUpdateManyWithoutQuestionsNestedInputSchema.js';
export const QAPairUpdateInputSchema = z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    question: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    answer: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    secondaryLabel: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    tags: z.lazy(() => TagUpdateManyWithoutQAPairNestedInputSchema).optional(),
    topics: z.lazy(() => TopicUpdateManyWithoutQAPairNestedInputSchema).optional(),
    subjects: z.lazy(() => SubjectUpdateManyWithoutQaPairNestedInputSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutQuestionsNestedInputSchema).optional()
}).strict();
export default QAPairUpdateInputSchema;

import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema } from './TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema.js';
import { PracticeExamUncheckedUpdateManyWithoutQuestionsNestedInputSchema } from './PracticeExamUncheckedUpdateManyWithoutQuestionsNestedInputSchema.js';
export const QAPairUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.QAPairUncheckedUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  question: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  secondaryLabel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  correctCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inCorrectCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutQuestionsNestedInputSchema).optional()
}).strict();
export default QAPairUncheckedUpdateWithoutTagsInputSchema;
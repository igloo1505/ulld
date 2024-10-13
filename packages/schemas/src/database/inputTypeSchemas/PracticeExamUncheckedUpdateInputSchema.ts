import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { TopicUncheckedUpdateManyWithoutPracticeExamNestedInputSchema } from '../TopicUncheckedUpdateManyWithoutPracticeExamNestedInputSchema.js';
import { TagUncheckedUpdateManyWithoutPracticeExamNestedInputSchema } from '../TagUncheckedUpdateManyWithoutPracticeExamNestedInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutPracticeExamNestedInputSchema } from '../SubjectUncheckedUpdateManyWithoutPracticeExamNestedInputSchema.js';
import { QAPairUncheckedUpdateManyWithoutPracticeExamNestedInputSchema } from '../QAPairUncheckedUpdateManyWithoutPracticeExamNestedInputSchema.js';
export const PracticeExamUncheckedUpdateInputSchema: z.ZodType<Prisma.PracticeExamUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  correctCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inCorrectCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timeLimitInSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timeCompletedInSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  questions: z.lazy(() => QAPairUncheckedUpdateManyWithoutPracticeExamNestedInputSchema).optional()
}).strict();
export default PracticeExamUncheckedUpdateInputSchema;
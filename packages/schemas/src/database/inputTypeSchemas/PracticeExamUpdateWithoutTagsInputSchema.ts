import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { TopicUpdateManyWithoutPracticeExamNestedInputSchema } from '../TopicUpdateManyWithoutPracticeExamNestedInputSchema.js';
import { SubjectUpdateManyWithoutPracticeExamNestedInputSchema } from '../SubjectUpdateManyWithoutPracticeExamNestedInputSchema.js';
import { QAPairUpdateManyWithoutPracticeExamNestedInputSchema } from '../QAPairUpdateManyWithoutPracticeExamNestedInputSchema.js';
export const PracticeExamUpdateWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamUpdateWithoutTagsInput> = z.object({
  correctCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inCorrectCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timeLimitInSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timeCompletedInSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  questions: z.lazy(() => QAPairUpdateManyWithoutPracticeExamNestedInputSchema).optional()
}).strict();
export default PracticeExamUpdateWithoutTagsInputSchema;
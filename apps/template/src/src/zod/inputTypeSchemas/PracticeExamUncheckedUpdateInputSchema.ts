import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TopicUncheckedUpdateManyWithoutPracticeExamNestedInputSchema } from './TopicUncheckedUpdateManyWithoutPracticeExamNestedInputSchema';
import { TagUncheckedUpdateManyWithoutPracticeExamNestedInputSchema } from './TagUncheckedUpdateManyWithoutPracticeExamNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutPracticeExamNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutPracticeExamNestedInputSchema';
import { QAPairUncheckedUpdateManyWithoutPracticeExamNestedInputSchema } from './QAPairUncheckedUpdateManyWithoutPracticeExamNestedInputSchema';

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
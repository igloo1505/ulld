import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TopicUpdateManyWithoutPracticeExamNestedInputSchema } from './TopicUpdateManyWithoutPracticeExamNestedInputSchema';
import { TagUpdateManyWithoutPracticeExamNestedInputSchema } from './TagUpdateManyWithoutPracticeExamNestedInputSchema';
import { QAPairUpdateManyWithoutPracticeExamNestedInputSchema } from './QAPairUpdateManyWithoutPracticeExamNestedInputSchema';

export const PracticeExamUpdateWithoutSubjectsInputSchema: z.ZodType<Prisma.PracticeExamUpdateWithoutSubjectsInput> = z.object({
  correctCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inCorrectCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timeLimitInSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timeCompletedInSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  questions: z.lazy(() => QAPairUpdateManyWithoutPracticeExamNestedInputSchema).optional()
}).strict();

export default PracticeExamUpdateWithoutSubjectsInputSchema;

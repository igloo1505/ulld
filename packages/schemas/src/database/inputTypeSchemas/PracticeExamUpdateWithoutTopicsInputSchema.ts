import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateManyWithoutPracticeExamNestedInputSchema } from './TagUpdateManyWithoutPracticeExamNestedInputSchema';
import { SubjectUpdateManyWithoutPracticeExamNestedInputSchema } from './SubjectUpdateManyWithoutPracticeExamNestedInputSchema';
import { QAPairUpdateManyWithoutPracticeExamNestedInputSchema } from './QAPairUpdateManyWithoutPracticeExamNestedInputSchema';

export const PracticeExamUpdateWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamUpdateWithoutTopicsInput> = z.object({
  correctCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inCorrectCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timeLimitInSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  timeCompletedInSeconds: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  questions: z.lazy(() => QAPairUpdateManyWithoutPracticeExamNestedInputSchema).optional()
}).strict();

export default PracticeExamUpdateWithoutTopicsInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedManyWithoutPracticeExamInputSchema } from './TagCreateNestedManyWithoutPracticeExamInputSchema';
import { SubjectCreateNestedManyWithoutPracticeExamInputSchema } from './SubjectCreateNestedManyWithoutPracticeExamInputSchema';
import { QAPairCreateNestedManyWithoutPracticeExamInputSchema } from './QAPairCreateNestedManyWithoutPracticeExamInputSchema';

export const PracticeExamCreateWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamCreateWithoutTopicsInput> = z.object({
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: z.lazy(() => QAPairCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();

export default PracticeExamCreateWithoutTopicsInputSchema;

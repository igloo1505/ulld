import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateNestedManyWithoutPracticeExamInputSchema } from './TopicCreateNestedManyWithoutPracticeExamInputSchema';
import { TagCreateNestedManyWithoutPracticeExamInputSchema } from './TagCreateNestedManyWithoutPracticeExamInputSchema';
import { QAPairCreateNestedManyWithoutPracticeExamInputSchema } from './QAPairCreateNestedManyWithoutPracticeExamInputSchema';

export const PracticeExamCreateWithoutSubjectsInputSchema: z.ZodType<Prisma.PracticeExamCreateWithoutSubjectsInput> = z.object({
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: z.lazy(() => QAPairCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();

export default PracticeExamCreateWithoutSubjectsInputSchema;

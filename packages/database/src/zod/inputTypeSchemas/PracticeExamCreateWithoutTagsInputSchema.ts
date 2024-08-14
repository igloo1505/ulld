import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateNestedManyWithoutPracticeExamInputSchema } from './TopicCreateNestedManyWithoutPracticeExamInputSchema';
import { SubjectCreateNestedManyWithoutPracticeExamInputSchema } from './SubjectCreateNestedManyWithoutPracticeExamInputSchema';
import { QAPairCreateNestedManyWithoutPracticeExamInputSchema } from './QAPairCreateNestedManyWithoutPracticeExamInputSchema';

export const PracticeExamCreateWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamCreateWithoutTagsInput> = z.object({
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: z.lazy(() => QAPairCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();

export default PracticeExamCreateWithoutTagsInputSchema;

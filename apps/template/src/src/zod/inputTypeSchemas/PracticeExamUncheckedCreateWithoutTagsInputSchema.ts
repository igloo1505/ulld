import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema } from './TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema';
import { QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema } from './QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema';

export const PracticeExamUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamUncheckedCreateWithoutTagsInput> = z.object({
  id: z.number().int().optional(),
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();

export default PracticeExamUncheckedCreateWithoutTagsInputSchema;

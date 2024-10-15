import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema } from './TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema.js';
import { QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema } from './QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema.js';
export const PracticeExamUncheckedCreateWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamUncheckedCreateWithoutTopicsInput> = z.object({
  id: z.number().int().optional(),
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
export default PracticeExamUncheckedCreateWithoutTopicsInputSchema;
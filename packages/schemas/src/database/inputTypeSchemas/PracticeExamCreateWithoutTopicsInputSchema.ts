import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateNestedManyWithoutPracticeExamInputSchema } from '../TagCreateNestedManyWithoutPracticeExamInputSchema.js';
import { SubjectCreateNestedManyWithoutPracticeExamInputSchema } from '../SubjectCreateNestedManyWithoutPracticeExamInputSchema.js';
import { QAPairCreateNestedManyWithoutPracticeExamInputSchema } from '../QAPairCreateNestedManyWithoutPracticeExamInputSchema.js';
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
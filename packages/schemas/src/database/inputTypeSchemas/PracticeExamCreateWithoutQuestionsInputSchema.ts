import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateNestedManyWithoutPracticeExamInputSchema } from '../TopicCreateNestedManyWithoutPracticeExamInputSchema.js';
import { TagCreateNestedManyWithoutPracticeExamInputSchema } from '../TagCreateNestedManyWithoutPracticeExamInputSchema.js';
import { SubjectCreateNestedManyWithoutPracticeExamInputSchema } from '../SubjectCreateNestedManyWithoutPracticeExamInputSchema.js';
export const PracticeExamCreateWithoutQuestionsInputSchema: z.ZodType<Prisma.PracticeExamCreateWithoutQuestionsInput> = z.object({
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
export default PracticeExamCreateWithoutQuestionsInputSchema;
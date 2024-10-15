import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateNestedManyWithoutPracticeExamInputSchema } from './TopicCreateNestedManyWithoutPracticeExamInputSchema.js';
import { TagCreateNestedManyWithoutPracticeExamInputSchema } from './TagCreateNestedManyWithoutPracticeExamInputSchema.js';
import { SubjectCreateNestedManyWithoutPracticeExamInputSchema } from './SubjectCreateNestedManyWithoutPracticeExamInputSchema.js';
import { QAPairCreateNestedManyWithoutPracticeExamInputSchema } from './QAPairCreateNestedManyWithoutPracticeExamInputSchema.js';
export const PracticeExamCreateInputSchema: z.ZodType<Prisma.PracticeExamCreateInput> = z.object({
  correctCount: z.number().int(),
  inCorrectCount: z.number().int(),
  timeLimitInSeconds: z.number().int(),
  timeCompletedInSeconds: z.number().int(),
  date: z.coerce.date().optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutPracticeExamInputSchema).optional(),
  questions: z.lazy(() => QAPairCreateNestedManyWithoutPracticeExamInputSchema).optional()
}).strict();
export default PracticeExamCreateInputSchema;
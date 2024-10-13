import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateNestedManyWithoutQAPairInputSchema } from '../TagCreateNestedManyWithoutQAPairInputSchema.js';
import { TopicCreateNestedManyWithoutQAPairInputSchema } from '../TopicCreateNestedManyWithoutQAPairInputSchema.js';
import { PracticeExamCreateNestedManyWithoutQuestionsInputSchema } from '../PracticeExamCreateNestedManyWithoutQuestionsInputSchema.js';
export const QAPairCreateWithoutSubjectsInputSchema: z.ZodType<Prisma.QAPairCreateWithoutSubjectsInput> = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutQAPairInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();
export default QAPairCreateWithoutSubjectsInputSchema;
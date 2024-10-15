import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateNestedManyWithoutQAPairInputSchema } from './TopicCreateNestedManyWithoutQAPairInputSchema.js';
import { SubjectCreateNestedManyWithoutQaPairInputSchema } from './SubjectCreateNestedManyWithoutQaPairInputSchema.js';
import { PracticeExamCreateNestedManyWithoutQuestionsInputSchema } from './PracticeExamCreateNestedManyWithoutQuestionsInputSchema.js';
export const QAPairCreateWithoutTagsInputSchema: z.ZodType<Prisma.QAPairCreateWithoutTagsInput> = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();
export default QAPairCreateWithoutTagsInputSchema;
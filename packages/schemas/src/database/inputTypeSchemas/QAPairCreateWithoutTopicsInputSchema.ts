import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedManyWithoutQAPairInputSchema } from './TagCreateNestedManyWithoutQAPairInputSchema';
import { SubjectCreateNestedManyWithoutQaPairInputSchema } from './SubjectCreateNestedManyWithoutQaPairInputSchema';
import { PracticeExamCreateNestedManyWithoutQuestionsInputSchema } from './PracticeExamCreateNestedManyWithoutQuestionsInputSchema';

export const QAPairCreateWithoutTopicsInputSchema: z.ZodType<Prisma.QAPairCreateWithoutTopicsInput> = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();

export default QAPairCreateWithoutTopicsInputSchema;

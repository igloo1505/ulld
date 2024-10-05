import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedManyWithoutQAPairInputSchema } from './TagCreateNestedManyWithoutQAPairInputSchema';
import { TopicCreateNestedManyWithoutQAPairInputSchema } from './TopicCreateNestedManyWithoutQAPairInputSchema';
import { SubjectCreateNestedManyWithoutQaPairInputSchema } from './SubjectCreateNestedManyWithoutQaPairInputSchema';

export const QAPairCreateWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairCreateWithoutPracticeExamInput> = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutQaPairInputSchema).optional()
}).strict();

export default QAPairCreateWithoutPracticeExamInputSchema;

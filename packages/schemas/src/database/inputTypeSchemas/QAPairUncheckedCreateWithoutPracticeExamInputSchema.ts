import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutQAPairInputSchema } from '../TagUncheckedCreateNestedManyWithoutQAPairInputSchema.js';
import { TopicUncheckedCreateNestedManyWithoutQAPairInputSchema } from '../TopicUncheckedCreateNestedManyWithoutQAPairInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema } from '../SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema.js';
export const QAPairUncheckedCreateWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairUncheckedCreateWithoutPracticeExamInput> = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema).optional()
}).strict();
export default QAPairUncheckedCreateWithoutPracticeExamInputSchema;
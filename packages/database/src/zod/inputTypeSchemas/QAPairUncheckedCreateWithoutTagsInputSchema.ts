import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicUncheckedCreateNestedManyWithoutQAPairInputSchema } from './TopicUncheckedCreateNestedManyWithoutQAPairInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema } from './SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema';
import { PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema';

export const QAPairUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.QAPairUncheckedCreateWithoutTagsInput> = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();

export default QAPairUncheckedCreateWithoutTagsInputSchema;

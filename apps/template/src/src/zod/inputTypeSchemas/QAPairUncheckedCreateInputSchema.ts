import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutQAPairInputSchema } from './TagUncheckedCreateNestedManyWithoutQAPairInputSchema';
import { TopicUncheckedCreateNestedManyWithoutQAPairInputSchema } from './TopicUncheckedCreateNestedManyWithoutQAPairInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema } from './SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema';
import { PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema';

export const QAPairUncheckedCreateInputSchema: z.ZodType<Prisma.QAPairUncheckedCreateInput> = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutQAPairInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutQaPairInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema).optional()
}).strict();

export default QAPairUncheckedCreateInputSchema;

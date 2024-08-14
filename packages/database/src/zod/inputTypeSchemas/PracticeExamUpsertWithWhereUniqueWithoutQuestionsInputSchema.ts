import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithoutQuestionsInputSchema } from './PracticeExamUpdateWithoutQuestionsInputSchema';
import { PracticeExamUncheckedUpdateWithoutQuestionsInputSchema } from './PracticeExamUncheckedUpdateWithoutQuestionsInputSchema';
import { PracticeExamCreateWithoutQuestionsInputSchema } from './PracticeExamCreateWithoutQuestionsInputSchema';
import { PracticeExamUncheckedCreateWithoutQuestionsInputSchema } from './PracticeExamUncheckedCreateWithoutQuestionsInputSchema';

export const PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema: z.ZodType<Prisma.PracticeExamUpsertWithWhereUniqueWithoutQuestionsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutQuestionsInputSchema) ]),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema) ]),
}).strict();

export default PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema;

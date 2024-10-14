import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithoutQuestionsInputSchema } from './PracticeExamUpdateWithoutQuestionsInputSchema';
import { PracticeExamUncheckedUpdateWithoutQuestionsInputSchema } from './PracticeExamUncheckedUpdateWithoutQuestionsInputSchema';

export const PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema: z.ZodType<Prisma.PracticeExamUpdateWithWhereUniqueWithoutQuestionsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutQuestionsInputSchema) ]),
}).strict();

export default PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema;

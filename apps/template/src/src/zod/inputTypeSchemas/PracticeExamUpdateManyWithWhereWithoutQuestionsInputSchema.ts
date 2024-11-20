import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema';
import { PracticeExamUpdateManyMutationInputSchema } from './PracticeExamUpdateManyMutationInputSchema';
import { PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema } from './PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema';

export const PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema: z.ZodType<Prisma.PracticeExamUpdateManyWithWhereWithoutQuestionsInput> = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateManyMutationInputSchema),z.lazy(() => PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema) ]),
}).strict();

export default PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema;

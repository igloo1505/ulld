import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema';
import { PracticeExamUpdateManyMutationInputSchema } from './PracticeExamUpdateManyMutationInputSchema';
import { PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema } from './PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema';

export const PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateManyMutationInputSchema),z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();

export default PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema;

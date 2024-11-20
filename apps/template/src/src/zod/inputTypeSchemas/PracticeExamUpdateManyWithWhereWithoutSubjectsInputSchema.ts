import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema';
import { PracticeExamUpdateManyMutationInputSchema } from './PracticeExamUpdateManyMutationInputSchema';
import { PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema } from './PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema';

export const PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.PracticeExamUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateManyMutationInputSchema),z.lazy(() => PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();

export default PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithoutSubjectsInputSchema } from './PracticeExamUpdateWithoutSubjectsInputSchema';
import { PracticeExamUncheckedUpdateWithoutSubjectsInputSchema } from './PracticeExamUncheckedUpdateWithoutSubjectsInputSchema';

export const PracticeExamUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.PracticeExamUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateWithoutSubjectsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();

export default PracticeExamUpdateWithWhereUniqueWithoutSubjectsInputSchema;

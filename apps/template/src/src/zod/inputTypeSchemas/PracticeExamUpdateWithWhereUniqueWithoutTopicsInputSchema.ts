import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithoutTopicsInputSchema } from './PracticeExamUpdateWithoutTopicsInputSchema';
import { PracticeExamUncheckedUpdateWithoutTopicsInputSchema } from './PracticeExamUncheckedUpdateWithoutTopicsInputSchema';

export const PracticeExamUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateWithoutTopicsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();

export default PracticeExamUpdateWithWhereUniqueWithoutTopicsInputSchema;

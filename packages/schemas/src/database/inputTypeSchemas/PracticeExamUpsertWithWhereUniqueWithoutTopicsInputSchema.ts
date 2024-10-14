import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithoutTopicsInputSchema } from './PracticeExamUpdateWithoutTopicsInputSchema';
import { PracticeExamUncheckedUpdateWithoutTopicsInputSchema } from './PracticeExamUncheckedUpdateWithoutTopicsInputSchema';
import { PracticeExamCreateWithoutTopicsInputSchema } from './PracticeExamCreateWithoutTopicsInputSchema';
import { PracticeExamUncheckedCreateWithoutTopicsInputSchema } from './PracticeExamUncheckedCreateWithoutTopicsInputSchema';

export const PracticeExamUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithoutTopicsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default PracticeExamUpsertWithWhereUniqueWithoutTopicsInputSchema;

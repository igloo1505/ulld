import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithoutSubjectsInputSchema } from './PracticeExamUpdateWithoutSubjectsInputSchema';
import { PracticeExamUncheckedUpdateWithoutSubjectsInputSchema } from './PracticeExamUncheckedUpdateWithoutSubjectsInputSchema';
import { PracticeExamCreateWithoutSubjectsInputSchema } from './PracticeExamCreateWithoutSubjectsInputSchema';
import { PracticeExamUncheckedCreateWithoutSubjectsInputSchema } from './PracticeExamUncheckedCreateWithoutSubjectsInputSchema';

export const PracticeExamUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.PracticeExamUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithoutSubjectsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutSubjectsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default PracticeExamUpsertWithWhereUniqueWithoutSubjectsInputSchema;

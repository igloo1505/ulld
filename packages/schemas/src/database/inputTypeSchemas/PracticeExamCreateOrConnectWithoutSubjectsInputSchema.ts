import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamCreateWithoutSubjectsInputSchema } from './PracticeExamCreateWithoutSubjectsInputSchema';
import { PracticeExamUncheckedCreateWithoutSubjectsInputSchema } from './PracticeExamUncheckedCreateWithoutSubjectsInputSchema';

export const PracticeExamCreateOrConnectWithoutSubjectsInputSchema: z.ZodType<Prisma.PracticeExamCreateOrConnectWithoutSubjectsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutSubjectsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default PracticeExamCreateOrConnectWithoutSubjectsInputSchema;

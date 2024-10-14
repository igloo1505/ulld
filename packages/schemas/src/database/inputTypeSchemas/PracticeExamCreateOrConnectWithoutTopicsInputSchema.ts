import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamCreateWithoutTopicsInputSchema } from './PracticeExamCreateWithoutTopicsInputSchema';
import { PracticeExamUncheckedCreateWithoutTopicsInputSchema } from './PracticeExamUncheckedCreateWithoutTopicsInputSchema';

export const PracticeExamCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default PracticeExamCreateOrConnectWithoutTopicsInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairCreateWithoutPracticeExamInputSchema } from './QAPairCreateWithoutPracticeExamInputSchema';
import { QAPairUncheckedCreateWithoutPracticeExamInputSchema } from './QAPairUncheckedCreateWithoutPracticeExamInputSchema';

export const QAPairCreateOrConnectWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairCreateOrConnectWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();

export default QAPairCreateOrConnectWithoutPracticeExamInputSchema;

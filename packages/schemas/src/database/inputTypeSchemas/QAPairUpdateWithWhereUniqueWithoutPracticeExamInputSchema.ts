import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithoutPracticeExamInputSchema } from './QAPairUpdateWithoutPracticeExamInputSchema';
import { QAPairUncheckedUpdateWithoutPracticeExamInputSchema } from './QAPairUncheckedUpdateWithoutPracticeExamInputSchema';

export const QAPairUpdateWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairUpdateWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateWithoutPracticeExamInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutPracticeExamInputSchema) ]),
}).strict();

export default QAPairUpdateWithWhereUniqueWithoutPracticeExamInputSchema;

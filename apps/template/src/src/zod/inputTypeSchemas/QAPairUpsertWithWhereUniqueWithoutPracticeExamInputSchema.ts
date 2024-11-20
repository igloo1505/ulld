import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithoutPracticeExamInputSchema } from './QAPairUpdateWithoutPracticeExamInputSchema';
import { QAPairUncheckedUpdateWithoutPracticeExamInputSchema } from './QAPairUncheckedUpdateWithoutPracticeExamInputSchema';
import { QAPairCreateWithoutPracticeExamInputSchema } from './QAPairCreateWithoutPracticeExamInputSchema';
import { QAPairUncheckedCreateWithoutPracticeExamInputSchema } from './QAPairUncheckedCreateWithoutPracticeExamInputSchema';

export const QAPairUpsertWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairUpsertWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QAPairUpdateWithoutPracticeExamInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutPracticeExamInputSchema) ]),
  create: z.union([ z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();

export default QAPairUpsertWithWhereUniqueWithoutPracticeExamInputSchema;

import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from '../QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithoutPracticeExamInputSchema } from '../QAPairUpdateWithoutPracticeExamInputSchema.js';
import { QAPairUncheckedUpdateWithoutPracticeExamInputSchema } from '../QAPairUncheckedUpdateWithoutPracticeExamInputSchema.js';
import { QAPairCreateWithoutPracticeExamInputSchema } from '../QAPairCreateWithoutPracticeExamInputSchema.js';
import { QAPairUncheckedCreateWithoutPracticeExamInputSchema } from '../QAPairUncheckedCreateWithoutPracticeExamInputSchema.js';
export const QAPairUpsertWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairUpsertWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QAPairUpdateWithoutPracticeExamInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutPracticeExamInputSchema) ]),
  create: z.union([ z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();
export default QAPairUpsertWithWhereUniqueWithoutPracticeExamInputSchema;
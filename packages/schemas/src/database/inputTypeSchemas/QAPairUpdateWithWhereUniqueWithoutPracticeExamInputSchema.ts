import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithoutPracticeExamInputSchema } from './QAPairUpdateWithoutPracticeExamInputSchema.js';
import { QAPairUncheckedUpdateWithoutPracticeExamInputSchema } from './QAPairUncheckedUpdateWithoutPracticeExamInputSchema.js';
export const QAPairUpdateWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairUpdateWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateWithoutPracticeExamInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutPracticeExamInputSchema) ]),
}).strict();
export default QAPairUpdateWithWhereUniqueWithoutPracticeExamInputSchema;
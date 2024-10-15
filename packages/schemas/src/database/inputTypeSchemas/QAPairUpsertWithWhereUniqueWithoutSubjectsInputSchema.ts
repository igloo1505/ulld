import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithoutSubjectsInputSchema } from './QAPairUpdateWithoutSubjectsInputSchema.js';
import { QAPairUncheckedUpdateWithoutSubjectsInputSchema } from './QAPairUncheckedUpdateWithoutSubjectsInputSchema.js';
import { QAPairCreateWithoutSubjectsInputSchema } from './QAPairCreateWithoutSubjectsInputSchema.js';
import { QAPairUncheckedCreateWithoutSubjectsInputSchema } from './QAPairUncheckedCreateWithoutSubjectsInputSchema.js';
export const QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.QAPairUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QAPairUpdateWithoutSubjectsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => QAPairCreateWithoutSubjectsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();
export default QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema;
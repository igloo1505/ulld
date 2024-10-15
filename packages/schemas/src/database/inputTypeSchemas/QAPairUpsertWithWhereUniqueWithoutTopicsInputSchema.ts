import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithoutTopicsInputSchema } from './QAPairUpdateWithoutTopicsInputSchema.js';
import { QAPairUncheckedUpdateWithoutTopicsInputSchema } from './QAPairUncheckedUpdateWithoutTopicsInputSchema.js';
import { QAPairCreateWithoutTopicsInputSchema } from './QAPairCreateWithoutTopicsInputSchema.js';
import { QAPairUncheckedCreateWithoutTopicsInputSchema } from './QAPairUncheckedCreateWithoutTopicsInputSchema.js';
export const QAPairUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.QAPairUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QAPairUpdateWithoutTopicsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => QAPairCreateWithoutTopicsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default QAPairUpsertWithWhereUniqueWithoutTopicsInputSchema;
import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithoutTopicsInputSchema } from './QAPairUpdateWithoutTopicsInputSchema.js';
import { QAPairUncheckedUpdateWithoutTopicsInputSchema } from './QAPairUncheckedUpdateWithoutTopicsInputSchema.js';
export const QAPairUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.QAPairUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateWithoutTopicsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();
export default QAPairUpdateWithWhereUniqueWithoutTopicsInputSchema;
import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithoutTopicsInputSchema } from './QAPairUpdateWithoutTopicsInputSchema';
import { QAPairUncheckedUpdateWithoutTopicsInputSchema } from './QAPairUncheckedUpdateWithoutTopicsInputSchema';
import { QAPairCreateWithoutTopicsInputSchema } from './QAPairCreateWithoutTopicsInputSchema';
import { QAPairUncheckedCreateWithoutTopicsInputSchema } from './QAPairUncheckedCreateWithoutTopicsInputSchema';

export const QAPairUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.QAPairUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QAPairUpdateWithoutTopicsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => QAPairCreateWithoutTopicsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default QAPairUpsertWithWhereUniqueWithoutTopicsInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairCreateWithoutTopicsInputSchema } from './QAPairCreateWithoutTopicsInputSchema';
import { QAPairUncheckedCreateWithoutTopicsInputSchema } from './QAPairUncheckedCreateWithoutTopicsInputSchema';

export const QAPairCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.QAPairCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QAPairCreateWithoutTopicsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default QAPairCreateOrConnectWithoutTopicsInputSchema;

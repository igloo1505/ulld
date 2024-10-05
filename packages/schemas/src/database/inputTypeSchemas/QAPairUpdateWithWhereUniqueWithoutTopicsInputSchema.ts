import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithoutTopicsInputSchema } from './QAPairUpdateWithoutTopicsInputSchema';
import { QAPairUncheckedUpdateWithoutTopicsInputSchema } from './QAPairUncheckedUpdateWithoutTopicsInputSchema';

export const QAPairUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.QAPairUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateWithoutTopicsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();

export default QAPairUpdateWithWhereUniqueWithoutTopicsInputSchema;

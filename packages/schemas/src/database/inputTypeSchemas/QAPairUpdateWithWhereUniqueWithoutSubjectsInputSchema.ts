import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithoutSubjectsInputSchema } from './QAPairUpdateWithoutSubjectsInputSchema';
import { QAPairUncheckedUpdateWithoutSubjectsInputSchema } from './QAPairUncheckedUpdateWithoutSubjectsInputSchema';

export const QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.QAPairUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateWithoutSubjectsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();

export default QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema;

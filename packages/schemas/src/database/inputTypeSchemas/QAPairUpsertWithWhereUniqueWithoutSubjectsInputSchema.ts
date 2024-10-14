import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithoutSubjectsInputSchema } from './QAPairUpdateWithoutSubjectsInputSchema';
import { QAPairUncheckedUpdateWithoutSubjectsInputSchema } from './QAPairUncheckedUpdateWithoutSubjectsInputSchema';
import { QAPairCreateWithoutSubjectsInputSchema } from './QAPairCreateWithoutSubjectsInputSchema';
import { QAPairUncheckedCreateWithoutSubjectsInputSchema } from './QAPairUncheckedCreateWithoutSubjectsInputSchema';

export const QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.QAPairUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QAPairUpdateWithoutSubjectsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => QAPairCreateWithoutSubjectsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema;

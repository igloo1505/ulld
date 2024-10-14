import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairCreateWithoutSubjectsInputSchema } from './QAPairCreateWithoutSubjectsInputSchema';
import { QAPairUncheckedCreateWithoutSubjectsInputSchema } from './QAPairUncheckedCreateWithoutSubjectsInputSchema';
import { QAPairCreateOrConnectWithoutSubjectsInputSchema } from './QAPairCreateOrConnectWithoutSubjectsInputSchema';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';

export const QAPairCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.QAPairCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => QAPairCreateWithoutSubjectsInputSchema),z.lazy(() => QAPairCreateWithoutSubjectsInputSchema).array(),z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QAPairCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => QAPairCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QAPairCreateNestedManyWithoutSubjectsInputSchema;

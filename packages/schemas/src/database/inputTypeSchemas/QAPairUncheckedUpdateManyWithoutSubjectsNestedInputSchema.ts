import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairCreateWithoutSubjectsInputSchema } from './QAPairCreateWithoutSubjectsInputSchema';
import { QAPairUncheckedCreateWithoutSubjectsInputSchema } from './QAPairUncheckedCreateWithoutSubjectsInputSchema';
import { QAPairCreateOrConnectWithoutSubjectsInputSchema } from './QAPairCreateOrConnectWithoutSubjectsInputSchema';
import { QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema';
import { QAPairUpdateManyWithWhereWithoutSubjectsInputSchema } from './QAPairUpdateManyWithWhereWithoutSubjectsInputSchema';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema';

export const QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema: z.ZodType<Prisma.QAPairUncheckedUpdateManyWithoutSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => QAPairCreateWithoutSubjectsInputSchema),z.lazy(() => QAPairCreateWithoutSubjectsInputSchema).array(),z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QAPairCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => QAPairCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QAPairUpdateManyWithWhereWithoutSubjectsInputSchema),z.lazy(() => QAPairUpdateManyWithWhereWithoutSubjectsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QAPairScalarWhereInputSchema),z.lazy(() => QAPairScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema;

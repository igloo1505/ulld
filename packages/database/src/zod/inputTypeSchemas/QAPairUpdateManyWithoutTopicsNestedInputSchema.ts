import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairCreateWithoutTopicsInputSchema } from './QAPairCreateWithoutTopicsInputSchema';
import { QAPairUncheckedCreateWithoutTopicsInputSchema } from './QAPairUncheckedCreateWithoutTopicsInputSchema';
import { QAPairCreateOrConnectWithoutTopicsInputSchema } from './QAPairCreateOrConnectWithoutTopicsInputSchema';
import { QAPairUpsertWithWhereUniqueWithoutTopicsInputSchema } from './QAPairUpsertWithWhereUniqueWithoutTopicsInputSchema';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithWhereUniqueWithoutTopicsInputSchema } from './QAPairUpdateWithWhereUniqueWithoutTopicsInputSchema';
import { QAPairUpdateManyWithWhereWithoutTopicsInputSchema } from './QAPairUpdateManyWithWhereWithoutTopicsInputSchema';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema';

export const QAPairUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.QAPairUpdateManyWithoutTopicsNestedInput> = z.object({
  create: z.union([ z.lazy(() => QAPairCreateWithoutTopicsInputSchema),z.lazy(() => QAPairCreateWithoutTopicsInputSchema).array(),z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QAPairCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => QAPairCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QAPairUpsertWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => QAPairUpsertWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QAPairUpdateWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => QAPairUpdateWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QAPairUpdateManyWithWhereWithoutTopicsInputSchema),z.lazy(() => QAPairUpdateManyWithWhereWithoutTopicsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QAPairScalarWhereInputSchema),z.lazy(() => QAPairScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QAPairUpdateManyWithoutTopicsNestedInputSchema;

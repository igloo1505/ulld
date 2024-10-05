import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateWithoutSequentialListInputSchema } from './IpynbCreateWithoutSequentialListInputSchema';
import { IpynbUncheckedCreateWithoutSequentialListInputSchema } from './IpynbUncheckedCreateWithoutSequentialListInputSchema';
import { IpynbCreateOrConnectWithoutSequentialListInputSchema } from './IpynbCreateOrConnectWithoutSequentialListInputSchema';
import { IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema } from './IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema';
import { IpynbCreateManySequentialListInputEnvelopeSchema } from './IpynbCreateManySequentialListInputEnvelopeSchema';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema } from './IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema';
import { IpynbUpdateManyWithWhereWithoutSequentialListInputSchema } from './IpynbUpdateManyWithWhereWithoutSequentialListInputSchema';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema';

export const IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema: z.ZodType<Prisma.IpynbUncheckedUpdateManyWithoutSequentialListNestedInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutSequentialListInputSchema),z.lazy(() => IpynbCreateWithoutSequentialListInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutSequentialListInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSequentialListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutSequentialListInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutSequentialListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema),z.lazy(() => IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IpynbCreateManySequentialListInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema),z.lazy(() => IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IpynbUpdateManyWithWhereWithoutSequentialListInputSchema),z.lazy(() => IpynbUpdateManyWithWhereWithoutSequentialListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IpynbScalarWhereInputSchema),z.lazy(() => IpynbScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema;

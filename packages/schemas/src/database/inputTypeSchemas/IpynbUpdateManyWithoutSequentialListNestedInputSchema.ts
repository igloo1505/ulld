import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateWithoutSequentialListInputSchema } from '../IpynbCreateWithoutSequentialListInputSchema.js';
import { IpynbUncheckedCreateWithoutSequentialListInputSchema } from '../IpynbUncheckedCreateWithoutSequentialListInputSchema.js';
import { IpynbCreateOrConnectWithoutSequentialListInputSchema } from '../IpynbCreateOrConnectWithoutSequentialListInputSchema.js';
import { IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema } from '../IpynbUpsertWithWhereUniqueWithoutSequentialListInputSchema.js';
import { IpynbCreateManySequentialListInputEnvelopeSchema } from '../IpynbCreateManySequentialListInputEnvelopeSchema.js';
import { IpynbWhereUniqueInputSchema } from '../IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema } from '../IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema.js';
import { IpynbUpdateManyWithWhereWithoutSequentialListInputSchema } from '../IpynbUpdateManyWithWhereWithoutSequentialListInputSchema.js';
import { IpynbScalarWhereInputSchema } from '../IpynbScalarWhereInputSchema.js';
export const IpynbUpdateManyWithoutSequentialListNestedInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithoutSequentialListNestedInput> = z.object({
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
export default IpynbUpdateManyWithoutSequentialListNestedInputSchema;
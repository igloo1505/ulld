import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateWithoutTopicsInputSchema } from '../IpynbCreateWithoutTopicsInputSchema.js';
import { IpynbUncheckedCreateWithoutTopicsInputSchema } from '../IpynbUncheckedCreateWithoutTopicsInputSchema.js';
import { IpynbCreateOrConnectWithoutTopicsInputSchema } from '../IpynbCreateOrConnectWithoutTopicsInputSchema.js';
import { IpynbUpsertWithWhereUniqueWithoutTopicsInputSchema } from '../IpynbUpsertWithWhereUniqueWithoutTopicsInputSchema.js';
import { IpynbWhereUniqueInputSchema } from '../IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithWhereUniqueWithoutTopicsInputSchema } from '../IpynbUpdateWithWhereUniqueWithoutTopicsInputSchema.js';
import { IpynbUpdateManyWithWhereWithoutTopicsInputSchema } from '../IpynbUpdateManyWithWhereWithoutTopicsInputSchema.js';
import { IpynbScalarWhereInputSchema } from '../IpynbScalarWhereInputSchema.js';
export const IpynbUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithoutTopicsNestedInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutTopicsInputSchema),z.lazy(() => IpynbCreateWithoutTopicsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IpynbUpsertWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => IpynbUpsertWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IpynbUpdateWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => IpynbUpdateWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IpynbUpdateManyWithWhereWithoutTopicsInputSchema),z.lazy(() => IpynbUpdateManyWithWhereWithoutTopicsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IpynbScalarWhereInputSchema),z.lazy(() => IpynbScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default IpynbUpdateManyWithoutTopicsNestedInputSchema;
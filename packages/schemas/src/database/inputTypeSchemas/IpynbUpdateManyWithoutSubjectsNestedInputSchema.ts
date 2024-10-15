import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateWithoutSubjectsInputSchema } from './IpynbCreateWithoutSubjectsInputSchema.js';
import { IpynbUncheckedCreateWithoutSubjectsInputSchema } from './IpynbUncheckedCreateWithoutSubjectsInputSchema.js';
import { IpynbCreateOrConnectWithoutSubjectsInputSchema } from './IpynbCreateOrConnectWithoutSubjectsInputSchema.js';
import { IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema.js';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema.js';
import { IpynbUpdateManyWithWhereWithoutSubjectsInputSchema } from './IpynbUpdateManyWithWhereWithoutSubjectsInputSchema.js';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
export const IpynbUpdateManyWithoutSubjectsNestedInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithoutSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutSubjectsInputSchema),z.lazy(() => IpynbCreateWithoutSubjectsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IpynbUpdateManyWithWhereWithoutSubjectsInputSchema),z.lazy(() => IpynbUpdateManyWithWhereWithoutSubjectsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IpynbScalarWhereInputSchema),z.lazy(() => IpynbScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default IpynbUpdateManyWithoutSubjectsNestedInputSchema;
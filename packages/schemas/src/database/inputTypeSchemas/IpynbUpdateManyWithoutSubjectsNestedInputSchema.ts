import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateWithoutSubjectsInputSchema } from './IpynbCreateWithoutSubjectsInputSchema';
import { IpynbUncheckedCreateWithoutSubjectsInputSchema } from './IpynbUncheckedCreateWithoutSubjectsInputSchema';
import { IpynbCreateOrConnectWithoutSubjectsInputSchema } from './IpynbCreateOrConnectWithoutSubjectsInputSchema';
import { IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './IpynbUpsertWithWhereUniqueWithoutSubjectsInputSchema';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema';
import { IpynbUpdateManyWithWhereWithoutSubjectsInputSchema } from './IpynbUpdateManyWithWhereWithoutSubjectsInputSchema';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema';

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

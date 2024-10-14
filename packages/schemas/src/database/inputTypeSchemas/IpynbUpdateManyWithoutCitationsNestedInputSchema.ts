import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateWithoutCitationsInputSchema } from './IpynbCreateWithoutCitationsInputSchema.js';
import { IpynbUncheckedCreateWithoutCitationsInputSchema } from './IpynbUncheckedCreateWithoutCitationsInputSchema.js';
import { IpynbCreateOrConnectWithoutCitationsInputSchema } from './IpynbCreateOrConnectWithoutCitationsInputSchema.js';
import { IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema } from './IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema.js';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema } from './IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema.js';
import { IpynbUpdateManyWithWhereWithoutCitationsInputSchema } from './IpynbUpdateManyWithWhereWithoutCitationsInputSchema.js';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
export const IpynbUpdateManyWithoutCitationsNestedInputSchema: z.ZodType<Prisma.IpynbUpdateManyWithoutCitationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutCitationsInputSchema),z.lazy(() => IpynbCreateWithoutCitationsInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutCitationsInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutCitationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutCitationsInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutCitationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema),z.lazy(() => IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema),z.lazy(() => IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IpynbUpdateManyWithWhereWithoutCitationsInputSchema),z.lazy(() => IpynbUpdateManyWithWhereWithoutCitationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IpynbScalarWhereInputSchema),z.lazy(() => IpynbScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default IpynbUpdateManyWithoutCitationsNestedInputSchema;
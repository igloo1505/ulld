import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbCreateWithoutCitationsInputSchema } from './IpynbCreateWithoutCitationsInputSchema';
import { IpynbUncheckedCreateWithoutCitationsInputSchema } from './IpynbUncheckedCreateWithoutCitationsInputSchema';
import { IpynbCreateOrConnectWithoutCitationsInputSchema } from './IpynbCreateOrConnectWithoutCitationsInputSchema';
import { IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema } from './IpynbUpsertWithWhereUniqueWithoutCitationsInputSchema';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema';
import { IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema } from './IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema';
import { IpynbUpdateManyWithWhereWithoutCitationsInputSchema } from './IpynbUpdateManyWithWhereWithoutCitationsInputSchema';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema';

export const IpynbUncheckedUpdateManyWithoutCitationsNestedInputSchema: z.ZodType<Prisma.IpynbUncheckedUpdateManyWithoutCitationsNestedInput> = z.object({
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

export default IpynbUncheckedUpdateManyWithoutCitationsNestedInputSchema;

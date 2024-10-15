import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateWithoutReadingListInputSchema } from './IpynbCreateWithoutReadingListInputSchema.js';
import { IpynbUncheckedCreateWithoutReadingListInputSchema } from './IpynbUncheckedCreateWithoutReadingListInputSchema.js';
import { IpynbCreateOrConnectWithoutReadingListInputSchema } from './IpynbCreateOrConnectWithoutReadingListInputSchema.js';
import { IpynbUpsertWithWhereUniqueWithoutReadingListInputSchema } from './IpynbUpsertWithWhereUniqueWithoutReadingListInputSchema.js';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithWhereUniqueWithoutReadingListInputSchema } from './IpynbUpdateWithWhereUniqueWithoutReadingListInputSchema.js';
import { IpynbUpdateManyWithWhereWithoutReadingListInputSchema } from './IpynbUpdateManyWithWhereWithoutReadingListInputSchema.js';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
export const IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema: z.ZodType<Prisma.IpynbUncheckedUpdateManyWithoutReadingListNestedInput> = z.object({
  create: z.union([ z.lazy(() => IpynbCreateWithoutReadingListInputSchema),z.lazy(() => IpynbCreateWithoutReadingListInputSchema).array(),z.lazy(() => IpynbUncheckedCreateWithoutReadingListInputSchema),z.lazy(() => IpynbUncheckedCreateWithoutReadingListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IpynbCreateOrConnectWithoutReadingListInputSchema),z.lazy(() => IpynbCreateOrConnectWithoutReadingListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IpynbUpsertWithWhereUniqueWithoutReadingListInputSchema),z.lazy(() => IpynbUpsertWithWhereUniqueWithoutReadingListInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IpynbWhereUniqueInputSchema),z.lazy(() => IpynbWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IpynbUpdateWithWhereUniqueWithoutReadingListInputSchema),z.lazy(() => IpynbUpdateWithWhereUniqueWithoutReadingListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IpynbUpdateManyWithWhereWithoutReadingListInputSchema),z.lazy(() => IpynbUpdateManyWithWhereWithoutReadingListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IpynbScalarWhereInputSchema),z.lazy(() => IpynbScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema;
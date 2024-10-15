import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListCreateWithoutIpynbNotesInputSchema } from './ReadingListCreateWithoutIpynbNotesInputSchema.js';
import { ReadingListUncheckedCreateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedCreateWithoutIpynbNotesInputSchema.js';
import { ReadingListCreateOrConnectWithoutIpynbNotesInputSchema } from './ReadingListCreateOrConnectWithoutIpynbNotesInputSchema.js';
import { ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema } from './ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema.js';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
import { ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema } from './ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema.js';
import { ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema } from './ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema.js';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema.js';
export const ReadingListUpdateManyWithoutIpynbNotesNestedInputSchema: z.ZodType<Prisma.ReadingListUpdateManyWithoutIpynbNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadingListCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReadingListScalarWhereInputSchema),z.lazy(() => ReadingListScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default ReadingListUpdateManyWithoutIpynbNotesNestedInputSchema;
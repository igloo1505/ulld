import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListCreateWithoutIpynbNotesInputSchema } from './ReadingListCreateWithoutIpynbNotesInputSchema';
import { ReadingListUncheckedCreateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedCreateWithoutIpynbNotesInputSchema';
import { ReadingListCreateOrConnectWithoutIpynbNotesInputSchema } from './ReadingListCreateOrConnectWithoutIpynbNotesInputSchema';
import { ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema } from './ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema } from './ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema';
import { ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema } from './ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema';

export const ReadingListUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema: z.ZodType<Prisma.ReadingListUncheckedUpdateManyWithoutIpynbNotesNestedInput> = z.object({
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

export default ReadingListUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema;

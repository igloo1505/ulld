import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListCreateWithoutBibEntriesInputSchema } from './ReadingListCreateWithoutBibEntriesInputSchema.js';
import { ReadingListUncheckedCreateWithoutBibEntriesInputSchema } from './ReadingListUncheckedCreateWithoutBibEntriesInputSchema.js';
import { ReadingListCreateOrConnectWithoutBibEntriesInputSchema } from './ReadingListCreateOrConnectWithoutBibEntriesInputSchema.js';
import { ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema } from './ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema.js';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
import { ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema } from './ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema.js';
import { ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema } from './ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema.js';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema.js';
export const ReadingListUpdateManyWithoutBibEntriesNestedInputSchema: z.ZodType<Prisma.ReadingListUpdateManyWithoutBibEntriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReadingListCreateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => ReadingListUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadingListCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => ReadingListCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReadingListScalarWhereInputSchema),z.lazy(() => ReadingListScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default ReadingListUpdateManyWithoutBibEntriesNestedInputSchema;
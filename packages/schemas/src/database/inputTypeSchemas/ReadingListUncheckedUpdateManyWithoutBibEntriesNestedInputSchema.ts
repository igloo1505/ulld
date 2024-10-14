import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListCreateWithoutBibEntriesInputSchema } from './ReadingListCreateWithoutBibEntriesInputSchema';
import { ReadingListUncheckedCreateWithoutBibEntriesInputSchema } from './ReadingListUncheckedCreateWithoutBibEntriesInputSchema';
import { ReadingListCreateOrConnectWithoutBibEntriesInputSchema } from './ReadingListCreateOrConnectWithoutBibEntriesInputSchema';
import { ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema } from './ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema } from './ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema';
import { ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema } from './ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema';

export const ReadingListUncheckedUpdateManyWithoutBibEntriesNestedInputSchema: z.ZodType<Prisma.ReadingListUncheckedUpdateManyWithoutBibEntriesNestedInput> = z.object({
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

export default ReadingListUncheckedUpdateManyWithoutBibEntriesNestedInputSchema;

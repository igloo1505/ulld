import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListCreateWithoutBibEntriesInputSchema } from './ReadingListCreateWithoutBibEntriesInputSchema.js';
import { ReadingListUncheckedCreateWithoutBibEntriesInputSchema } from './ReadingListUncheckedCreateWithoutBibEntriesInputSchema.js';
import { ReadingListCreateOrConnectWithoutBibEntriesInputSchema } from './ReadingListCreateOrConnectWithoutBibEntriesInputSchema.js';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
export const ReadingListUncheckedCreateNestedManyWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUncheckedCreateNestedManyWithoutBibEntriesInput> = z.object({
  create: z.union([ z.lazy(() => ReadingListCreateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => ReadingListUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadingListCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => ReadingListCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ReadingListUncheckedCreateNestedManyWithoutBibEntriesInputSchema;
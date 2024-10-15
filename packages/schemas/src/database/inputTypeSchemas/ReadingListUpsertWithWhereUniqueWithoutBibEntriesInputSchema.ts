import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
import { ReadingListUpdateWithoutBibEntriesInputSchema } from './ReadingListUpdateWithoutBibEntriesInputSchema.js';
import { ReadingListUncheckedUpdateWithoutBibEntriesInputSchema } from './ReadingListUncheckedUpdateWithoutBibEntriesInputSchema.js';
import { ReadingListCreateWithoutBibEntriesInputSchema } from './ReadingListCreateWithoutBibEntriesInputSchema.js';
import { ReadingListUncheckedCreateWithoutBibEntriesInputSchema } from './ReadingListUncheckedCreateWithoutBibEntriesInputSchema.js';
export const ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUpsertWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReadingListUpdateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutBibEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();
export default ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema;
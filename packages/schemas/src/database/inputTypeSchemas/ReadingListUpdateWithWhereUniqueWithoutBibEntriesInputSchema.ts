import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from '../ReadingListWhereUniqueInputSchema.js';
import { ReadingListUpdateWithoutBibEntriesInputSchema } from '../ReadingListUpdateWithoutBibEntriesInputSchema.js';
import { ReadingListUncheckedUpdateWithoutBibEntriesInputSchema } from '../ReadingListUncheckedUpdateWithoutBibEntriesInputSchema.js';
export const ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUpdateWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReadingListUpdateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutBibEntriesInputSchema) ]),
}).strict();
export default ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema;
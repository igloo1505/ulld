import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListUpdateWithoutBibEntriesInputSchema } from './ReadingListUpdateWithoutBibEntriesInputSchema';
import { ReadingListUncheckedUpdateWithoutBibEntriesInputSchema } from './ReadingListUncheckedUpdateWithoutBibEntriesInputSchema';
import { ReadingListCreateWithoutBibEntriesInputSchema } from './ReadingListCreateWithoutBibEntriesInputSchema';
import { ReadingListUncheckedCreateWithoutBibEntriesInputSchema } from './ReadingListUncheckedCreateWithoutBibEntriesInputSchema';

export const ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUpsertWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReadingListUpdateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutBibEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();

export default ReadingListUpsertWithWhereUniqueWithoutBibEntriesInputSchema;

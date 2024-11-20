import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListUpdateWithoutBibEntriesInputSchema } from './ReadingListUpdateWithoutBibEntriesInputSchema';
import { ReadingListUncheckedUpdateWithoutBibEntriesInputSchema } from './ReadingListUncheckedUpdateWithoutBibEntriesInputSchema';

export const ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUpdateWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReadingListUpdateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutBibEntriesInputSchema) ]),
}).strict();

export default ReadingListUpdateWithWhereUniqueWithoutBibEntriesInputSchema;

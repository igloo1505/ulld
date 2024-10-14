import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListCreateWithoutBibEntriesInputSchema } from './ReadingListCreateWithoutBibEntriesInputSchema';
import { ReadingListUncheckedCreateWithoutBibEntriesInputSchema } from './ReadingListUncheckedCreateWithoutBibEntriesInputSchema';

export const ReadingListCreateOrConnectWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListCreateOrConnectWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();

export default ReadingListCreateOrConnectWithoutBibEntriesInputSchema;

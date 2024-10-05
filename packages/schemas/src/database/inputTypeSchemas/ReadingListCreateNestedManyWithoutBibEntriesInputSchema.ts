import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListCreateWithoutBibEntriesInputSchema } from './ReadingListCreateWithoutBibEntriesInputSchema';
import { ReadingListUncheckedCreateWithoutBibEntriesInputSchema } from './ReadingListUncheckedCreateWithoutBibEntriesInputSchema';
import { ReadingListCreateOrConnectWithoutBibEntriesInputSchema } from './ReadingListCreateOrConnectWithoutBibEntriesInputSchema';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';

export const ReadingListCreateNestedManyWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListCreateNestedManyWithoutBibEntriesInput> = z.object({
  create: z.union([ z.lazy(() => ReadingListCreateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => ReadingListUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadingListCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => ReadingListCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadingListWhereUniqueInputSchema),z.lazy(() => ReadingListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReadingListCreateNestedManyWithoutBibEntriesInputSchema;

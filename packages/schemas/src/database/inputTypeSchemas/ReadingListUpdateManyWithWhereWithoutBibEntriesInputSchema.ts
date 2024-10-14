import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema';
import { ReadingListUpdateManyMutationInputSchema } from './ReadingListUpdateManyMutationInputSchema';
import { ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema } from './ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema';

export const ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUpdateManyWithWhereWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => ReadingListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReadingListUpdateManyMutationInputSchema),z.lazy(() => ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema) ]),
}).strict();

export default ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema;

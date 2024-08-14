import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema';
import { ReadingListUpdateManyMutationInputSchema } from './ReadingListUpdateManyMutationInputSchema';
import { ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema } from './ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema';

export const ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListUpdateManyWithWhereWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => ReadingListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReadingListUpdateManyMutationInputSchema),z.lazy(() => ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema) ]),
}).strict();

export default ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema;

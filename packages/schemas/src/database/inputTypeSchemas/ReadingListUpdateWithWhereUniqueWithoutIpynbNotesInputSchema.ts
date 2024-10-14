import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListUpdateWithoutIpynbNotesInputSchema } from './ReadingListUpdateWithoutIpynbNotesInputSchema';
import { ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema';

export const ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReadingListUpdateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;

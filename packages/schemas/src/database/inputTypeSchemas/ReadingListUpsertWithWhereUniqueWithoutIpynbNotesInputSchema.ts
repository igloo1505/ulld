import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListUpdateWithoutIpynbNotesInputSchema } from './ReadingListUpdateWithoutIpynbNotesInputSchema';
import { ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema';
import { ReadingListCreateWithoutIpynbNotesInputSchema } from './ReadingListCreateWithoutIpynbNotesInputSchema';
import { ReadingListUncheckedCreateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedCreateWithoutIpynbNotesInputSchema';

export const ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReadingListUpdateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;

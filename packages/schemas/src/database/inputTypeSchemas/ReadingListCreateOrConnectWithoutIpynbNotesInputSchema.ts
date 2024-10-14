import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListCreateWithoutIpynbNotesInputSchema } from './ReadingListCreateWithoutIpynbNotesInputSchema';
import { ReadingListUncheckedCreateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedCreateWithoutIpynbNotesInputSchema';

export const ReadingListCreateOrConnectWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListCreateOrConnectWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default ReadingListCreateOrConnectWithoutIpynbNotesInputSchema;

import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
import { ReadingListCreateWithoutIpynbNotesInputSchema } from './ReadingListCreateWithoutIpynbNotesInputSchema.js';
import { ReadingListUncheckedCreateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedCreateWithoutIpynbNotesInputSchema.js';
export const ReadingListCreateOrConnectWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListCreateOrConnectWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();
export default ReadingListCreateOrConnectWithoutIpynbNotesInputSchema;
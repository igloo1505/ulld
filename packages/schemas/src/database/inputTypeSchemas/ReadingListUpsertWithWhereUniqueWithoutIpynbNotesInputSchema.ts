import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
import { ReadingListUpdateWithoutIpynbNotesInputSchema } from './ReadingListUpdateWithoutIpynbNotesInputSchema.js';
import { ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema.js';
import { ReadingListCreateWithoutIpynbNotesInputSchema } from './ReadingListCreateWithoutIpynbNotesInputSchema.js';
import { ReadingListUncheckedCreateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedCreateWithoutIpynbNotesInputSchema.js';
export const ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReadingListUpdateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();
export default ReadingListUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;
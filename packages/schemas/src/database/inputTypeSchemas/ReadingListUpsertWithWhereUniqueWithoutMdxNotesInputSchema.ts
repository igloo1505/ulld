import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from '../ReadingListWhereUniqueInputSchema.js';
import { ReadingListUpdateWithoutMdxNotesInputSchema } from '../ReadingListUpdateWithoutMdxNotesInputSchema.js';
import { ReadingListUncheckedUpdateWithoutMdxNotesInputSchema } from '../ReadingListUncheckedUpdateWithoutMdxNotesInputSchema.js';
import { ReadingListCreateWithoutMdxNotesInputSchema } from '../ReadingListCreateWithoutMdxNotesInputSchema.js';
import { ReadingListUncheckedCreateWithoutMdxNotesInputSchema } from '../ReadingListUncheckedCreateWithoutMdxNotesInputSchema.js';
export const ReadingListUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReadingListUpdateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();
export default ReadingListUpsertWithWhereUniqueWithoutMdxNotesInputSchema;
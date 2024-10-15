import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
import { ReadingListUpdateWithoutMdxNotesInputSchema } from './ReadingListUpdateWithoutMdxNotesInputSchema.js';
import { ReadingListUncheckedUpdateWithoutMdxNotesInputSchema } from './ReadingListUncheckedUpdateWithoutMdxNotesInputSchema.js';
export const ReadingListUpdateWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListUpdateWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReadingListUpdateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutMdxNotesInputSchema) ]),
}).strict();
export default ReadingListUpdateWithWhereUniqueWithoutMdxNotesInputSchema;
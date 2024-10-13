import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from '../ReadingListWhereUniqueInputSchema.js';
import { ReadingListCreateWithoutMdxNotesInputSchema } from '../ReadingListCreateWithoutMdxNotesInputSchema.js';
import { ReadingListUncheckedCreateWithoutMdxNotesInputSchema } from '../ReadingListUncheckedCreateWithoutMdxNotesInputSchema.js';
export const ReadingListCreateOrConnectWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListCreateOrConnectWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();
export default ReadingListCreateOrConnectWithoutMdxNotesInputSchema;
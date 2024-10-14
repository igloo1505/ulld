import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListCreateWithoutMdxNotesInputSchema } from './ReadingListCreateWithoutMdxNotesInputSchema';
import { ReadingListUncheckedCreateWithoutMdxNotesInputSchema } from './ReadingListUncheckedCreateWithoutMdxNotesInputSchema';

export const ReadingListCreateOrConnectWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListCreateOrConnectWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default ReadingListCreateOrConnectWithoutMdxNotesInputSchema;

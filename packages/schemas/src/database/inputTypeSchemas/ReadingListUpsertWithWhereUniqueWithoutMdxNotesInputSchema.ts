import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListUpdateWithoutMdxNotesInputSchema } from './ReadingListUpdateWithoutMdxNotesInputSchema';
import { ReadingListUncheckedUpdateWithoutMdxNotesInputSchema } from './ReadingListUncheckedUpdateWithoutMdxNotesInputSchema';
import { ReadingListCreateWithoutMdxNotesInputSchema } from './ReadingListCreateWithoutMdxNotesInputSchema';
import { ReadingListUncheckedCreateWithoutMdxNotesInputSchema } from './ReadingListUncheckedCreateWithoutMdxNotesInputSchema';

export const ReadingListUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReadingListUpdateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default ReadingListUpsertWithWhereUniqueWithoutMdxNotesInputSchema;

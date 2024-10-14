import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema';
import { ReadingListUpdateWithoutMdxNotesInputSchema } from './ReadingListUpdateWithoutMdxNotesInputSchema';
import { ReadingListUncheckedUpdateWithoutMdxNotesInputSchema } from './ReadingListUncheckedUpdateWithoutMdxNotesInputSchema';

export const ReadingListUpdateWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListUpdateWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => ReadingListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReadingListUpdateWithoutMdxNotesInputSchema),z.lazy(() => ReadingListUncheckedUpdateWithoutMdxNotesInputSchema) ]),
}).strict();

export default ReadingListUpdateWithWhereUniqueWithoutMdxNotesInputSchema;

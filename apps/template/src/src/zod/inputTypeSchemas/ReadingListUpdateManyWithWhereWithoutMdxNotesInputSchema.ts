import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema';
import { ReadingListUpdateManyMutationInputSchema } from './ReadingListUpdateManyMutationInputSchema';
import { ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema } from './ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema';

export const ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListUpdateManyWithWhereWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => ReadingListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReadingListUpdateManyMutationInputSchema),z.lazy(() => ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema) ]),
}).strict();

export default ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema;

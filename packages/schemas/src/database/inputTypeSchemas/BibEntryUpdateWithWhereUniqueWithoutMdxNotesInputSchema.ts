import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutMdxNotesInputSchema } from './BibEntryUpdateWithoutMdxNotesInputSchema';
import { BibEntryUncheckedUpdateWithoutMdxNotesInputSchema } from './BibEntryUncheckedUpdateWithoutMdxNotesInputSchema';

export const BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutMdxNotesInputSchema) ]),
}).strict();

export default BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema;

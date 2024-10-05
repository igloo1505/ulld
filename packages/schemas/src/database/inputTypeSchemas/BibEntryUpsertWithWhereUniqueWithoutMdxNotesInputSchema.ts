import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutMdxNotesInputSchema } from './BibEntryUpdateWithoutMdxNotesInputSchema';
import { BibEntryUncheckedUpdateWithoutMdxNotesInputSchema } from './BibEntryUncheckedUpdateWithoutMdxNotesInputSchema';
import { BibEntryCreateWithoutMdxNotesInputSchema } from './BibEntryCreateWithoutMdxNotesInputSchema';
import { BibEntryUncheckedCreateWithoutMdxNotesInputSchema } from './BibEntryUncheckedCreateWithoutMdxNotesInputSchema';

export const BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutIpynbNotesInputSchema } from './BibEntryUpdateWithoutIpynbNotesInputSchema';
import { BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema } from './BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema';
import { BibEntryCreateWithoutIpynbNotesInputSchema } from './BibEntryCreateWithoutIpynbNotesInputSchema';
import { BibEntryUncheckedCreateWithoutIpynbNotesInputSchema } from './BibEntryUncheckedCreateWithoutIpynbNotesInputSchema';

export const BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;

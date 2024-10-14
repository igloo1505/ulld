import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutIpynbNotesInputSchema } from './BibEntryUpdateWithoutIpynbNotesInputSchema';
import { BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema } from './BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema';

export const BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;

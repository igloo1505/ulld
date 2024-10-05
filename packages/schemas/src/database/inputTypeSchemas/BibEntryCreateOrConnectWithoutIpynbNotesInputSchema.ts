import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryCreateWithoutIpynbNotesInputSchema } from './BibEntryCreateWithoutIpynbNotesInputSchema';
import { BibEntryUncheckedCreateWithoutIpynbNotesInputSchema } from './BibEntryUncheckedCreateWithoutIpynbNotesInputSchema';

export const BibEntryCreateOrConnectWithoutIpynbNotesInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default BibEntryCreateOrConnectWithoutIpynbNotesInputSchema;

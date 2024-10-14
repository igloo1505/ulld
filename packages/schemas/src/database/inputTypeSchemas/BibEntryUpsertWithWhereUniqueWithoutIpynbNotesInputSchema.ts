import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutIpynbNotesInputSchema } from './BibEntryUpdateWithoutIpynbNotesInputSchema.js';
import { BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema } from './BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema.js';
import { BibEntryCreateWithoutIpynbNotesInputSchema } from './BibEntryCreateWithoutIpynbNotesInputSchema.js';
import { BibEntryUncheckedCreateWithoutIpynbNotesInputSchema } from './BibEntryUncheckedCreateWithoutIpynbNotesInputSchema.js';
export const BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();
export default BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;
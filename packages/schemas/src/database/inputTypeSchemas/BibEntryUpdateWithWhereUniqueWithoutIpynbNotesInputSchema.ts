import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutIpynbNotesInputSchema } from '../BibEntryUpdateWithoutIpynbNotesInputSchema.js';
import { BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema } from '../BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema.js';
export const BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
}).strict();
export default BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;
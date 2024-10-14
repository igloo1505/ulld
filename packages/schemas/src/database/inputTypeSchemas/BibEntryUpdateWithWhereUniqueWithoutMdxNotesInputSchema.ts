import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutMdxNotesInputSchema } from './BibEntryUpdateWithoutMdxNotesInputSchema.js';
import { BibEntryUncheckedUpdateWithoutMdxNotesInputSchema } from './BibEntryUncheckedUpdateWithoutMdxNotesInputSchema.js';
export const BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutMdxNotesInputSchema) ]),
}).strict();
export default BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema;
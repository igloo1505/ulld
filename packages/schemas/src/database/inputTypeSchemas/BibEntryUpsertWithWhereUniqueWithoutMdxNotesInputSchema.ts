import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutMdxNotesInputSchema } from '../BibEntryUpdateWithoutMdxNotesInputSchema.js';
import { BibEntryUncheckedUpdateWithoutMdxNotesInputSchema } from '../BibEntryUncheckedUpdateWithoutMdxNotesInputSchema.js';
import { BibEntryCreateWithoutMdxNotesInputSchema } from '../BibEntryCreateWithoutMdxNotesInputSchema.js';
import { BibEntryUncheckedCreateWithoutMdxNotesInputSchema } from '../BibEntryUncheckedCreateWithoutMdxNotesInputSchema.js';
export const BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();
export default BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema;
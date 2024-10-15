import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryCreateWithoutMdxNotesInputSchema } from './BibEntryCreateWithoutMdxNotesInputSchema.js';
import { BibEntryUncheckedCreateWithoutMdxNotesInputSchema } from './BibEntryUncheckedCreateWithoutMdxNotesInputSchema.js';
export const BibEntryCreateOrConnectWithoutMdxNotesInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();
export default BibEntryCreateOrConnectWithoutMdxNotesInputSchema;
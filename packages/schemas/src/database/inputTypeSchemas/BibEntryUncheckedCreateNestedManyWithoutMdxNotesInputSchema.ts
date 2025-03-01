import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutMdxNotesInputSchema } from './BibEntryCreateWithoutMdxNotesInputSchema.js';
import { BibEntryUncheckedCreateWithoutMdxNotesInputSchema } from './BibEntryUncheckedCreateWithoutMdxNotesInputSchema.js';
import { BibEntryCreateOrConnectWithoutMdxNotesInputSchema } from './BibEntryCreateOrConnectWithoutMdxNotesInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
export const BibEntryUncheckedCreateNestedManyWithoutMdxNotesInputSchema: z.ZodType<Prisma.BibEntryUncheckedCreateNestedManyWithoutMdxNotesInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default BibEntryUncheckedCreateNestedManyWithoutMdxNotesInputSchema;
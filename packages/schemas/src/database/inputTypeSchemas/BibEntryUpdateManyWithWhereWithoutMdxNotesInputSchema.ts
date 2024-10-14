import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema } from './BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema.js';
export const BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema) ]),
}).strict();
export default BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema;
import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from '../BibEntryScalarWhereInputSchema.js';
import { BibEntryUpdateManyMutationInputSchema } from '../BibEntryUpdateManyMutationInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema } from '../BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema.js';
export const BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema) ]),
}).strict();
export default BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema;
import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema';
import { BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema } from './BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema';

export const BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema) ]),
}).strict();

export default BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema;

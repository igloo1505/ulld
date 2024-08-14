import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema';
import { BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema } from './BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema';

export const BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema) ]),
}).strict();

export default BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema;

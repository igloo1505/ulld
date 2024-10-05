import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema';
import { BibEntryUncheckedUpdateManyWithoutReadingListInputSchema } from './BibEntryUncheckedUpdateManyWithoutReadingListInputSchema';

export const BibEntryUpdateManyWithWhereWithoutReadingListInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutReadingListInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutReadingListInputSchema) ]),
}).strict();

export default BibEntryUpdateManyWithWhereWithoutReadingListInputSchema;

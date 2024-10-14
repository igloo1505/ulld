import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema';
import { BibEntryUncheckedUpdateManyWithoutBibInputSchema } from './BibEntryUncheckedUpdateManyWithoutBibInputSchema';

export const BibEntryUpdateManyWithWhereWithoutBibInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutBibInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutBibInputSchema) ]),
}).strict();

export default BibEntryUpdateManyWithWhereWithoutBibInputSchema;

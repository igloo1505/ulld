import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema';
import { BibEntryUncheckedUpdateManyWithoutTopicsInputSchema } from './BibEntryUncheckedUpdateManyWithoutTopicsInputSchema';

export const BibEntryUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();

export default BibEntryUpdateManyWithWhereWithoutTopicsInputSchema;

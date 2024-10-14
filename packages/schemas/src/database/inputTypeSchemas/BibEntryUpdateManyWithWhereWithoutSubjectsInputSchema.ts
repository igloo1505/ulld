import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema';
import { BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema } from './BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema';

export const BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();

export default BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema';
import { BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema } from './BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema';

export const BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutCitationGroupsInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema) ]),
}).strict();

export default BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema;

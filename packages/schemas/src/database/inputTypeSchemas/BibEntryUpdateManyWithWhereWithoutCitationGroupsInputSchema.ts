import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema } from './BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema.js';
export const BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithWhereWithoutCitationGroupsInput> = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateManyMutationInputSchema),z.lazy(() => BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema) ]),
}).strict();
export default BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema;
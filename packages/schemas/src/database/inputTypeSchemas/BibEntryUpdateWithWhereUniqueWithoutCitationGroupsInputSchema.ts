import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutCitationGroupsInputSchema } from './BibEntryUpdateWithoutCitationGroupsInputSchema.js';
import { BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema } from './BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema.js';
export const BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema) ]),
}).strict();
export default BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema;
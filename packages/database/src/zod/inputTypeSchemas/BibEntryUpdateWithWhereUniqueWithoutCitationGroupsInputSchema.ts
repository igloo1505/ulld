import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutCitationGroupsInputSchema } from './BibEntryUpdateWithoutCitationGroupsInputSchema';
import { BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema } from './BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema';

export const BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema) ]),
}).strict();

export default BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema;

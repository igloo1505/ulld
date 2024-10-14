import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryCreateWithoutCitationGroupsInputSchema } from './BibEntryCreateWithoutCitationGroupsInputSchema';
import { BibEntryUncheckedCreateWithoutCitationGroupsInputSchema } from './BibEntryUncheckedCreateWithoutCitationGroupsInputSchema';

export const BibEntryCreateOrConnectWithoutCitationGroupsInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutCitationGroupsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema) ]),
}).strict();

export default BibEntryCreateOrConnectWithoutCitationGroupsInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutCitationGroupsInputSchema } from './BibEntryUpdateWithoutCitationGroupsInputSchema';
import { BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema } from './BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema';
import { BibEntryCreateWithoutCitationGroupsInputSchema } from './BibEntryCreateWithoutCitationGroupsInputSchema';
import { BibEntryUncheckedCreateWithoutCitationGroupsInputSchema } from './BibEntryUncheckedCreateWithoutCitationGroupsInputSchema';

export const BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema) ]),
}).strict();

export default BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema;

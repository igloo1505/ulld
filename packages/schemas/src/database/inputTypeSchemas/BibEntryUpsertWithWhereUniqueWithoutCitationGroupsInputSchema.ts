import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutCitationGroupsInputSchema } from '../BibEntryUpdateWithoutCitationGroupsInputSchema.js';
import { BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema } from '../BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema.js';
import { BibEntryCreateWithoutCitationGroupsInputSchema } from '../BibEntryCreateWithoutCitationGroupsInputSchema.js';
import { BibEntryUncheckedCreateWithoutCitationGroupsInputSchema } from '../BibEntryUncheckedCreateWithoutCitationGroupsInputSchema.js';
export const BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema) ]),
}).strict();
export default BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema;
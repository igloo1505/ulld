import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryCreateWithoutCitationGroupsInputSchema } from '../BibEntryCreateWithoutCitationGroupsInputSchema.js';
import { BibEntryUncheckedCreateWithoutCitationGroupsInputSchema } from '../BibEntryUncheckedCreateWithoutCitationGroupsInputSchema.js';
export const BibEntryCreateOrConnectWithoutCitationGroupsInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutCitationGroupsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema) ]),
}).strict();
export default BibEntryCreateOrConnectWithoutCitationGroupsInputSchema;
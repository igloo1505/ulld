import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutCitationGroupsInputSchema } from './BibEntryCreateWithoutCitationGroupsInputSchema';
import { BibEntryUncheckedCreateWithoutCitationGroupsInputSchema } from './BibEntryUncheckedCreateWithoutCitationGroupsInputSchema';
import { BibEntryCreateOrConnectWithoutCitationGroupsInputSchema } from './BibEntryCreateOrConnectWithoutCitationGroupsInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';

export const BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema: z.ZodType<Prisma.BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema;

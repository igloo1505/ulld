import { z } from 'zod';
import { BibEntryCreateWithoutCitationGroupsInputSchema } from './BibEntryCreateWithoutCitationGroupsInputSchema.js';
import { BibEntryUncheckedCreateWithoutCitationGroupsInputSchema } from './BibEntryUncheckedCreateWithoutCitationGroupsInputSchema.js';
import { BibEntryCreateOrConnectWithoutCitationGroupsInputSchema } from './BibEntryCreateOrConnectWithoutCitationGroupsInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
export const BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema = z.object({
    create: z.union([z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema).array(), z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema;

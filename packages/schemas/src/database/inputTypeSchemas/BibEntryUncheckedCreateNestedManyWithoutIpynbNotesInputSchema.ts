import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutIpynbNotesInputSchema } from './BibEntryCreateWithoutIpynbNotesInputSchema';
import { BibEntryUncheckedCreateWithoutIpynbNotesInputSchema } from './BibEntryUncheckedCreateWithoutIpynbNotesInputSchema';
import { BibEntryCreateOrConnectWithoutIpynbNotesInputSchema } from './BibEntryCreateOrConnectWithoutIpynbNotesInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';

export const BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BibEntryUncheckedCreateNestedManyWithoutIpynbNotesInputSchema;

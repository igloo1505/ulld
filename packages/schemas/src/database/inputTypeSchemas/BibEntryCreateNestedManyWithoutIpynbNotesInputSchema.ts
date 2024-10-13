import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutIpynbNotesInputSchema } from '../BibEntryCreateWithoutIpynbNotesInputSchema.js';
import { BibEntryUncheckedCreateWithoutIpynbNotesInputSchema } from '../BibEntryUncheckedCreateWithoutIpynbNotesInputSchema.js';
import { BibEntryCreateOrConnectWithoutIpynbNotesInputSchema } from '../BibEntryCreateOrConnectWithoutIpynbNotesInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
export const BibEntryCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.BibEntryCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default BibEntryCreateNestedManyWithoutIpynbNotesInputSchema;
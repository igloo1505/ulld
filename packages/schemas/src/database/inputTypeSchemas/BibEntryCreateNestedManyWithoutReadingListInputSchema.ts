import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutReadingListInputSchema } from '../BibEntryCreateWithoutReadingListInputSchema.js';
import { BibEntryUncheckedCreateWithoutReadingListInputSchema } from '../BibEntryUncheckedCreateWithoutReadingListInputSchema.js';
import { BibEntryCreateOrConnectWithoutReadingListInputSchema } from '../BibEntryCreateOrConnectWithoutReadingListInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
export const BibEntryCreateNestedManyWithoutReadingListInputSchema: z.ZodType<Prisma.BibEntryCreateNestedManyWithoutReadingListInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutReadingListInputSchema),z.lazy(() => BibEntryCreateWithoutReadingListInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutReadingListInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutReadingListInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default BibEntryCreateNestedManyWithoutReadingListInputSchema;
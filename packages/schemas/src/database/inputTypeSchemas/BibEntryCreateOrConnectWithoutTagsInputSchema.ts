import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryCreateWithoutTagsInputSchema } from '../BibEntryCreateWithoutTagsInputSchema.js';
import { BibEntryUncheckedCreateWithoutTagsInputSchema } from '../BibEntryUncheckedCreateWithoutTagsInputSchema.js';
export const BibEntryCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default BibEntryCreateOrConnectWithoutTagsInputSchema;
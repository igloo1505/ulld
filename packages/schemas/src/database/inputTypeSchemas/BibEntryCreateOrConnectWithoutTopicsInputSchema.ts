import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryCreateWithoutTopicsInputSchema } from '../BibEntryCreateWithoutTopicsInputSchema.js';
import { BibEntryUncheckedCreateWithoutTopicsInputSchema } from '../BibEntryUncheckedCreateWithoutTopicsInputSchema.js';
export const BibEntryCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default BibEntryCreateOrConnectWithoutTopicsInputSchema;
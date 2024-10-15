import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibWhereUniqueInputSchema } from './BibWhereUniqueInputSchema.js';
import { BibCreateWithoutEntriesInputSchema } from './BibCreateWithoutEntriesInputSchema.js';
import { BibUncheckedCreateWithoutEntriesInputSchema } from './BibUncheckedCreateWithoutEntriesInputSchema.js';
export const BibCreateOrConnectWithoutEntriesInputSchema: z.ZodType<Prisma.BibCreateOrConnectWithoutEntriesInput> = z.object({
  where: z.lazy(() => BibWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibCreateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema) ]),
}).strict();
export default BibCreateOrConnectWithoutEntriesInputSchema;
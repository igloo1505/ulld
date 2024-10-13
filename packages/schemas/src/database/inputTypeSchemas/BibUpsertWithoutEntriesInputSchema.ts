import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibUpdateWithoutEntriesInputSchema } from '../BibUpdateWithoutEntriesInputSchema.js';
import { BibUncheckedUpdateWithoutEntriesInputSchema } from '../BibUncheckedUpdateWithoutEntriesInputSchema.js';
import { BibCreateWithoutEntriesInputSchema } from '../BibCreateWithoutEntriesInputSchema.js';
import { BibUncheckedCreateWithoutEntriesInputSchema } from '../BibUncheckedCreateWithoutEntriesInputSchema.js';
import { BibWhereInputSchema } from '../BibWhereInputSchema.js';
export const BibUpsertWithoutEntriesInputSchema: z.ZodType<Prisma.BibUpsertWithoutEntriesInput> = z.object({
  update: z.union([ z.lazy(() => BibUpdateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedUpdateWithoutEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => BibCreateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema) ]),
  where: z.lazy(() => BibWhereInputSchema).optional()
}).strict();
export default BibUpsertWithoutEntriesInputSchema;
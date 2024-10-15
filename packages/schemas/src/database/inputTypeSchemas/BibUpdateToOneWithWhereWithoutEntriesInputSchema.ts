import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibWhereInputSchema } from './BibWhereInputSchema.js';
import { BibUpdateWithoutEntriesInputSchema } from './BibUpdateWithoutEntriesInputSchema.js';
import { BibUncheckedUpdateWithoutEntriesInputSchema } from './BibUncheckedUpdateWithoutEntriesInputSchema.js';
export const BibUpdateToOneWithWhereWithoutEntriesInputSchema: z.ZodType<Prisma.BibUpdateToOneWithWhereWithoutEntriesInput> = z.object({
  where: z.lazy(() => BibWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BibUpdateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedUpdateWithoutEntriesInputSchema) ]),
}).strict();
export default BibUpdateToOneWithWhereWithoutEntriesInputSchema;
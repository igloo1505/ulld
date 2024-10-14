import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibUpdateWithoutEntriesInputSchema } from './BibUpdateWithoutEntriesInputSchema';
import { BibUncheckedUpdateWithoutEntriesInputSchema } from './BibUncheckedUpdateWithoutEntriesInputSchema';
import { BibCreateWithoutEntriesInputSchema } from './BibCreateWithoutEntriesInputSchema';
import { BibUncheckedCreateWithoutEntriesInputSchema } from './BibUncheckedCreateWithoutEntriesInputSchema';
import { BibWhereInputSchema } from './BibWhereInputSchema';

export const BibUpsertWithoutEntriesInputSchema: z.ZodType<Prisma.BibUpsertWithoutEntriesInput> = z.object({
  update: z.union([ z.lazy(() => BibUpdateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedUpdateWithoutEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => BibCreateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema) ]),
  where: z.lazy(() => BibWhereInputSchema).optional()
}).strict();

export default BibUpsertWithoutEntriesInputSchema;

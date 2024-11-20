import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibWhereInputSchema } from './BibWhereInputSchema';
import { BibUpdateWithoutEntriesInputSchema } from './BibUpdateWithoutEntriesInputSchema';
import { BibUncheckedUpdateWithoutEntriesInputSchema } from './BibUncheckedUpdateWithoutEntriesInputSchema';

export const BibUpdateToOneWithWhereWithoutEntriesInputSchema: z.ZodType<Prisma.BibUpdateToOneWithWhereWithoutEntriesInput> = z.object({
  where: z.lazy(() => BibWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BibUpdateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedUpdateWithoutEntriesInputSchema) ]),
}).strict();

export default BibUpdateToOneWithWhereWithoutEntriesInputSchema;

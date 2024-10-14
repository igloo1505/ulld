import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutTopicsInputSchema } from './BibEntryUpdateWithoutTopicsInputSchema';
import { BibEntryUncheckedUpdateWithoutTopicsInputSchema } from './BibEntryUncheckedUpdateWithoutTopicsInputSchema';

export const BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();

export default BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema;

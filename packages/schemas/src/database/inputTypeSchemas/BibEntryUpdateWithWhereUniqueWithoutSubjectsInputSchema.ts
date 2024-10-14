import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutSubjectsInputSchema } from './BibEntryUpdateWithoutSubjectsInputSchema';
import { BibEntryUncheckedUpdateWithoutSubjectsInputSchema } from './BibEntryUncheckedUpdateWithoutSubjectsInputSchema';

export const BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();

export default BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema;

import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutSubjectsInputSchema } from './BibEntryUpdateWithoutSubjectsInputSchema.js';
import { BibEntryUncheckedUpdateWithoutSubjectsInputSchema } from './BibEntryUncheckedUpdateWithoutSubjectsInputSchema.js';
export const BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();
export default BibEntryUpdateWithWhereUniqueWithoutSubjectsInputSchema;
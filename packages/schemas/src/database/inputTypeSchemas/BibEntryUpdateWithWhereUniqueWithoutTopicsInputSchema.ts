import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutTopicsInputSchema } from '../BibEntryUpdateWithoutTopicsInputSchema.js';
import { BibEntryUncheckedUpdateWithoutTopicsInputSchema } from '../BibEntryUncheckedUpdateWithoutTopicsInputSchema.js';
export const BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();
export default BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema;
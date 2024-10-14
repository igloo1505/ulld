import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutReadingListInputSchema } from './BibEntryUpdateWithoutReadingListInputSchema.js';
import { BibEntryUncheckedUpdateWithoutReadingListInputSchema } from './BibEntryUncheckedUpdateWithoutReadingListInputSchema.js';
export const BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutReadingListInputSchema) ]),
}).strict();
export default BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema;
import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutBibInputSchema } from '../BibEntryUpdateWithoutBibInputSchema.js';
import { BibEntryUncheckedUpdateWithoutBibInputSchema } from '../BibEntryUncheckedUpdateWithoutBibInputSchema.js';
export const BibEntryUpdateWithWhereUniqueWithoutBibInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutBibInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutBibInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutBibInputSchema) ]),
}).strict();
export default BibEntryUpdateWithWhereUniqueWithoutBibInputSchema;
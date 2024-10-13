import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithoutBibInputSchema } from '../BibEntryUpdateWithoutBibInputSchema.js';
import { BibEntryUncheckedUpdateWithoutBibInputSchema } from '../BibEntryUncheckedUpdateWithoutBibInputSchema.js';
import { BibEntryCreateWithoutBibInputSchema } from '../BibEntryCreateWithoutBibInputSchema.js';
import { BibEntryUncheckedCreateWithoutBibInputSchema } from '../BibEntryUncheckedCreateWithoutBibInputSchema.js';
export const BibEntryUpsertWithWhereUniqueWithoutBibInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutBibInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutBibInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutBibInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutBibInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema) ]),
}).strict();
export default BibEntryUpsertWithWhereUniqueWithoutBibInputSchema;
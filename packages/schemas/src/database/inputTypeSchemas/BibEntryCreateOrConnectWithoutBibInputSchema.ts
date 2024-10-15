import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryCreateWithoutBibInputSchema } from './BibEntryCreateWithoutBibInputSchema.js';
import { BibEntryUncheckedCreateWithoutBibInputSchema } from './BibEntryUncheckedCreateWithoutBibInputSchema.js';
export const BibEntryCreateOrConnectWithoutBibInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutBibInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutBibInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema) ]),
}).strict();
export default BibEntryCreateOrConnectWithoutBibInputSchema;
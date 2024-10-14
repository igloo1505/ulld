import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutBibInputSchema } from './BibEntryUpdateWithoutBibInputSchema';
import { BibEntryUncheckedUpdateWithoutBibInputSchema } from './BibEntryUncheckedUpdateWithoutBibInputSchema';
import { BibEntryCreateWithoutBibInputSchema } from './BibEntryCreateWithoutBibInputSchema';
import { BibEntryUncheckedCreateWithoutBibInputSchema } from './BibEntryUncheckedCreateWithoutBibInputSchema';

export const BibEntryUpsertWithWhereUniqueWithoutBibInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutBibInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutBibInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutBibInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutBibInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema) ]),
}).strict();

export default BibEntryUpsertWithWhereUniqueWithoutBibInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutBibInputSchema } from './BibEntryUpdateWithoutBibInputSchema';
import { BibEntryUncheckedUpdateWithoutBibInputSchema } from './BibEntryUncheckedUpdateWithoutBibInputSchema';

export const BibEntryUpdateWithWhereUniqueWithoutBibInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutBibInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutBibInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutBibInputSchema) ]),
}).strict();

export default BibEntryUpdateWithWhereUniqueWithoutBibInputSchema;

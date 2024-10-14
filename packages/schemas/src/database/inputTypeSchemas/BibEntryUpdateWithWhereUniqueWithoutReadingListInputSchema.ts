import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutReadingListInputSchema } from './BibEntryUpdateWithoutReadingListInputSchema';
import { BibEntryUncheckedUpdateWithoutReadingListInputSchema } from './BibEntryUncheckedUpdateWithoutReadingListInputSchema';

export const BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.BibEntryUpdateWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BibEntryUpdateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutReadingListInputSchema) ]),
}).strict();

export default BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema;

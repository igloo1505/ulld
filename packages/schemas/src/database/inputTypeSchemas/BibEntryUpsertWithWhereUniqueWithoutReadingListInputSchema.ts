import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithoutReadingListInputSchema } from './BibEntryUpdateWithoutReadingListInputSchema';
import { BibEntryUncheckedUpdateWithoutReadingListInputSchema } from './BibEntryUncheckedUpdateWithoutReadingListInputSchema';
import { BibEntryCreateWithoutReadingListInputSchema } from './BibEntryCreateWithoutReadingListInputSchema';
import { BibEntryUncheckedCreateWithoutReadingListInputSchema } from './BibEntryUncheckedCreateWithoutReadingListInputSchema';

export const BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema: z.ZodType<Prisma.BibEntryUpsertWithWhereUniqueWithoutReadingListInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BibEntryUpdateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedUpdateWithoutReadingListInputSchema) ]),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema) ]),
}).strict();

export default BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema;

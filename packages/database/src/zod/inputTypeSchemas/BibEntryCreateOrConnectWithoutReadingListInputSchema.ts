import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryCreateWithoutReadingListInputSchema } from './BibEntryCreateWithoutReadingListInputSchema';
import { BibEntryUncheckedCreateWithoutReadingListInputSchema } from './BibEntryUncheckedCreateWithoutReadingListInputSchema';

export const BibEntryCreateOrConnectWithoutReadingListInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutReadingListInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema) ]),
}).strict();

export default BibEntryCreateOrConnectWithoutReadingListInputSchema;

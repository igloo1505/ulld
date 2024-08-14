import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutReadingListInputSchema } from './BibEntryCreateWithoutReadingListInputSchema';
import { BibEntryUncheckedCreateWithoutReadingListInputSchema } from './BibEntryUncheckedCreateWithoutReadingListInputSchema';
import { BibEntryCreateOrConnectWithoutReadingListInputSchema } from './BibEntryCreateOrConnectWithoutReadingListInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';

export const BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema: z.ZodType<Prisma.BibEntryUncheckedCreateNestedManyWithoutReadingListInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutReadingListInputSchema),z.lazy(() => BibEntryCreateWithoutReadingListInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutReadingListInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutReadingListInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema;

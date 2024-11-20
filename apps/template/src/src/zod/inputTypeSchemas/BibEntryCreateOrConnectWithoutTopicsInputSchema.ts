import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryCreateWithoutTopicsInputSchema } from './BibEntryCreateWithoutTopicsInputSchema';
import { BibEntryUncheckedCreateWithoutTopicsInputSchema } from './BibEntryUncheckedCreateWithoutTopicsInputSchema';

export const BibEntryCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default BibEntryCreateOrConnectWithoutTopicsInputSchema;

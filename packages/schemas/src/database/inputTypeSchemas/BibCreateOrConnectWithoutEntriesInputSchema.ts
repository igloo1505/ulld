import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibWhereUniqueInputSchema } from './BibWhereUniqueInputSchema';
import { BibCreateWithoutEntriesInputSchema } from './BibCreateWithoutEntriesInputSchema';
import { BibUncheckedCreateWithoutEntriesInputSchema } from './BibUncheckedCreateWithoutEntriesInputSchema';

export const BibCreateOrConnectWithoutEntriesInputSchema: z.ZodType<Prisma.BibCreateOrConnectWithoutEntriesInput> = z.object({
  where: z.lazy(() => BibWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibCreateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema) ]),
}).strict();

export default BibCreateOrConnectWithoutEntriesInputSchema;

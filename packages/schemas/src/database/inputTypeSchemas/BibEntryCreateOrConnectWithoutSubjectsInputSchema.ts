import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryCreateWithoutSubjectsInputSchema } from './BibEntryCreateWithoutSubjectsInputSchema';
import { BibEntryUncheckedCreateWithoutSubjectsInputSchema } from './BibEntryUncheckedCreateWithoutSubjectsInputSchema';

export const BibEntryCreateOrConnectWithoutSubjectsInputSchema: z.ZodType<Prisma.BibEntryCreateOrConnectWithoutSubjectsInput> = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default BibEntryCreateOrConnectWithoutSubjectsInputSchema;
